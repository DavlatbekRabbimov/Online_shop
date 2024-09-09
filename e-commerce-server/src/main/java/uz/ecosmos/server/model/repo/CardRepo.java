package uz.ecosmos.server.model.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import uz.ecosmos.server.model.entity.Card;

import java.math.BigDecimal;

@Repository
public interface CardRepo extends JpaRepository<Card, Long> {

    @Query("SELECT c FROM Card c WHERE c.cardNumber = :cardNumber")
    Card findCardByCardNumber(@Param("cardNumber") String cardNumber);

    @Query("SELECT SUM(c.balance) AS totalBalance FROM Card c")
    BigDecimal findTotalBalance();
}
