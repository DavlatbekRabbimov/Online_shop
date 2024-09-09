package uz.ecosmos.server.service.impl;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import uz.ecosmos.server.exception.error.ErrorMessageException;
import uz.ecosmos.server.exception.OperationException;
import uz.ecosmos.server.model.entity.Card;
import uz.ecosmos.server.model.entity.Operation;
import uz.ecosmos.server.model.entity.Order;
import uz.ecosmos.server.model.repo.CardRepo;
import uz.ecosmos.server.model.repo.OperationRepo;
import uz.ecosmos.server.model.repo.OrderRepo;
import uz.ecosmos.server.service.CardService;
import uz.ecosmos.server.service.OperationService;
import uz.ecosmos.server.type.PaidStatus;
import uz.ecosmos.server.type.Type;

import java.math.BigDecimal;

@Slf4j
@AllArgsConstructor
@Service
public class OperationServiceImpl implements OperationService {

    private final CardRepo cardRepo;
    private final OperationRepo operationRepo;
    private final CardService cardService;
    private final OrderRepo orderRepo;
    private final ErrorMessageException errorMessage = new ErrorMessageException();

    @Transactional
    @Override
    public Operation deposit(String cardNumber, BigDecimal depositAmount) {
        return makeOperation("deposit", cardNumber, depositAmount, "Error: Deposit is not realized! - operation service");
    }

    @Transactional
    @Override
    public Operation withdraw(String cardNumber, BigDecimal withdrawAmount) {
        return makeOperation("withdraw", cardNumber, withdrawAmount, "Error: Withdraw is not realized! - operation service");
    }

    @Transactional
    @Override
    public Operation payOrder(Long orderId) {
        try {
            Order order = orderRepo.findById(orderId).orElseThrow(() -> new RuntimeException("Error: OrderID is not found!"));
            BigDecimal paymentAmount = order.getProductPrice();
            Card card = cardService.getCardNumber("8500013032421002");
            if (paymentAmount.compareTo(card.getBalance()) > 0) {
                throw errorMessage.errorLogic("Error: Card balance does not have enough funds! - operation service");
            }
            order.setPaidStatus(PaidStatus.OK);
            orderRepo.save(order);
            payCard(card, paymentAmount);
            Operation operation = new Operation();
            operation.setType(Type.PAYMENT);
            operation.setAmount(paymentAmount);
            operation.setCards(card);
            operationRepo.save(operation);
            return operation;
        } catch (Exception e) {
            throw errorMessage.errorCatch("Error: Pay order is not realized! - operation service", e);
        }
    }

    private void payCard(Card card, BigDecimal paymentAmount) {
        try {
            if (card != null) {
                card.setBalance(card.getBalance().subtract(paymentAmount));
                cardRepo.save(card);
            }
        } catch (Exception e) {
            throw errorMessage.errorCatch("Error: Pay card is not worked! - operation service", e);
        }
    }

    private Operation makeOperation(String type, String cardNumber, BigDecimal money, String error) {
        try {
            Card card = cardService.getCardNumber(cardNumber);
            Operation operation = new Operation();
            if (type.equals("deposit")) {
                card.setBalance(card.getBalance().add(money));
                operation = new Operation(Type.DEPOSIT, money, card);

            }
            if (type.equals("withdraw")) {
                if (money.compareTo(card.getBalance()) <= 0) {
                    card.setBalance(card.getBalance().subtract(money));
                    operation = new Operation(Type.WITHDRAW, money, card);
                } else {
                    throw errorMessage.errorLogic("Error: Withdrawal amount is greater than balance! - operation service");
                }
            }
            operationRepo.save(operation);
            cardRepo.save(card);
            return operation;
        } catch (Exception e) {
            log.error(error);
            throw new OperationException(error, e);
        }
    }


}
