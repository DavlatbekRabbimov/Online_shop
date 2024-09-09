package uz.ecosmos.server.service.impl;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import uz.ecosmos.server.dto.CardDto;
import uz.ecosmos.server.exception.CardDataNotFoundException;
import uz.ecosmos.server.exception.CardNotFoundException;
import uz.ecosmos.server.exception.error.ErrorMessageException;
import uz.ecosmos.server.model.entity.Card;
import uz.ecosmos.server.model.repo.CardRepo;
import uz.ecosmos.server.service.CardService;

import java.math.BigDecimal;

@Slf4j
@AllArgsConstructor
@Service
public class CardServiceImpl implements CardService {

    private final CardRepo cardRepo;
    private final ErrorMessageException errorMessage = new ErrorMessageException();

    @Override
    public Card addCard() {
        Card card = new Card();
        try {
            card.setCardNumber("8500013032421002");
            card.setBalance(new BigDecimal("0.0"));
            card.setFullName("Davlatbek Rabbimov");
            card.setMonth(12);
            card.setYear(2023);
            cardRepo.save(card);
            return card;
        } catch (Exception e) {
            e.printStackTrace();
            log.error("Error: Card is not created!");
            return card;
        }
    }

    @Override
    public Card getCardNumber(String cardNumber) {
        return searchCardNumber(cardNumber);
    }

    @Override
    public CardDto getCardData(String cardNumber) {
        Card card = searchCardNumber(cardNumber);
        try {
            return CardDto.builder()
                    .cardNumber(card.getCardNumber())
                    .fullName(card.getFullName())
                    .balance(card.getBalance())
                    .month(card.getMonth())
                    .year(card.getYear())
                    .build();

        } catch (Exception e) {
            e.printStackTrace();
            log.error("Error: Card data is not found! - card service");
            throw new CardDataNotFoundException("Error: Card data is not found! - card service");
        }
    }

    @Override
    public BigDecimal getTotalBalance() {
        try {
            return cardRepo.findTotalBalance();
        } catch (Exception e) {
            throw errorMessage.errorCatch("Error: Total balance is not found! - card service", e);
        }
    }

    private Card searchCardNumber(String cardNumber) {
        Card card = cardRepo.findCardByCardNumber(cardNumber);
        if (card == null) {
            log.error("Error: card is not found! - card service");
            throw new CardNotFoundException("Error: card is not found!");
        }
        return card;
    }

}
