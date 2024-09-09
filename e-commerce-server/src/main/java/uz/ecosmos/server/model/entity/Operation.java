package uz.ecosmos.server.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import uz.ecosmos.server.type.Type;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "operations")
public class Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Type type;
    private BigDecimal amount;
    private LocalDateTime dateTime;
    @ManyToOne
    @JoinColumn(name = "cards_id")
    @JsonBackReference
    private Card cards;

    public Operation(Type type, BigDecimal amount, Card cards) {
        this.type = type;
        this.amount = amount;
        this.dateTime = LocalDateTime.now();
        this.cards = cards;
    }

}
