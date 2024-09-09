package uz.ecosmos.server.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.ecosmos.server.model.entity.Operation;
import uz.ecosmos.server.service.OperationService;

import java.math.BigDecimal;

@CrossOrigin(origins = "http://localhost:3001")
@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class OptionalController {

    private final OperationService operationService;

    @PostMapping("/deposit/{cardNumber}/{depositAmount}")
    public ResponseEntity<Operation> depositMoney(@PathVariable String cardNumber, @PathVariable BigDecimal depositAmount) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(operationService.deposit(cardNumber, depositAmount));
        } catch (DataAccessException e) {
            log.error("Error - operation controller - Deposit is not realized!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/withdraw/{cardNumber}/{withdrawAmount}")
    public ResponseEntity<Operation> withdrawMoney(@PathVariable String cardNumber, @PathVariable BigDecimal withdrawAmount) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(operationService.withdraw(cardNumber, withdrawAmount));
        } catch (DataAccessException e) {
            log.error("Error - operation controller - Withdraw is not realized!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/payment/{orderId}")
    public ResponseEntity<Operation> paymentOrder(@PathVariable Long orderId) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(operationService.payOrder(orderId));
        } catch (DataAccessException e) {
            log.error("Error - operation controller - Payment is not realized!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
