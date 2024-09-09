package uz.ecosmos.server.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.ecosmos.server.dto.CardDto;
import uz.ecosmos.server.model.entity.Card;
import uz.ecosmos.server.service.CardService;

import java.math.BigDecimal;

@CrossOrigin(origins = "http://localhost:3001")
@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class CardController {

    private final CardService cardService;

    @PostMapping("/card/creation")
    public ResponseEntity<Card> createCard() {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(cardService.addCard());
        } catch (DataAccessException e) {
            log.error("Error - card controller - Create card is not worked!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/card/data/{cardNumber}")
    public ResponseEntity<CardDto> getCardData(@PathVariable String cardNumber) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(cardService.getCardData(cardNumber));
        } catch (DataAccessException e) {
            log.error("Error - card controller - Card data is not gotten!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/card/total-balance")
    public ResponseEntity<BigDecimal> getCardBalance() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(cardService.getTotalBalance());
        } catch (DataAccessException e) {
            log.error("Error - card controller - Card balance is not gotten!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
