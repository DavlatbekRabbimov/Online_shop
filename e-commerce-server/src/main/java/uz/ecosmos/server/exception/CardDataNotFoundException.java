package uz.ecosmos.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CardDataNotFoundException extends RuntimeException {
    public CardDataNotFoundException(String message) {
        super(message);
    }
}
