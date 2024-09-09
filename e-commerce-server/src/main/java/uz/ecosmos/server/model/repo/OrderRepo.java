package uz.ecosmos.server.model.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import uz.ecosmos.server.model.entity.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, Long> {

    @Query("SELECT COUNT(o.id) AS amount FROM Order o")
    Long findOrderAmount();

}
