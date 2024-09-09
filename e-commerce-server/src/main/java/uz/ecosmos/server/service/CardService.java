package uz.ecosmos.server.service;

import uz.ecosmos.server.dto.CardDto;
import uz.ecosmos.server.model.entity.Card;

import java.math.BigDecimal;

public interface CardService {

    Card addCard();

    Card getCardNumber(String cardNumber);

    CardDto getCardData(String cardNumber);

    BigDecimal getTotalBalance();
}
