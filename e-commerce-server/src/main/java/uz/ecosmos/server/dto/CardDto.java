package uz.ecosmos.server.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CardDto {
    private String fullName;
    private BigDecimal balance;
    private String cardNumber;
    private long month;
    private long year;
}
