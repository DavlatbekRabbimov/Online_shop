package uz.ecosmos.server.service;

import org.springframework.stereotype.Repository;
import uz.ecosmos.server.model.entity.Operation;

import java.math.BigDecimal;

@Repository
public interface OperationService {
    Operation deposit(String cardNumber, BigDecimal depositAmount);

    Operation withdraw(String cardNumber, BigDecimal withdrawAmount);

    Operation payOrder(Long orderId);

}
