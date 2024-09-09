package uz.ecosmos.server.exception.error;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import uz.ecosmos.server.exception.CustomException;

@Slf4j
@Getter
public class ErrorMessageException {
    public RuntimeException errorCatch(String errorMessage, Exception e){
        log.error(errorMessage, e);
        throw new CustomException(errorMessage, e);
    }

    public RuntimeException errorLogic(String errorMessage){
        log.error(errorMessage);
        throw new RuntimeException(errorMessage);
    }
}