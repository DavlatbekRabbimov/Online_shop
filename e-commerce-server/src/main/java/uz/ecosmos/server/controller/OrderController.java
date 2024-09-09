package uz.ecosmos.server.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.ecosmos.server.model.entity.Order;
import uz.ecosmos.server.service.OrderService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class OrderController {

    private final OrderService orderService;

    @GetMapping("/order/list")
    public ResponseEntity<List<Order>> getAll() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(orderService.getAllOrders());
        } catch (DataAccessException e) {
            log.error("Error - order controller - All order data is not gotten!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/order/saved")
    public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(orderService.saveOrders(order));
        } catch (DataAccessException e) {
            log.error("Error - order controller - Order data is not saved!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/order/deleted/{id}")
    public ResponseEntity<Order> deleteById(@PathVariable long id) {
        try {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(orderService.deleteOrderById(id));
        } catch (DataAccessException e) {
            log.error("Error - order controller - Order data is not deleted!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/order/counted")
    public ResponseEntity<Long> getOrderAmount() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(orderService.getOrderAmount());
        } catch (DataAccessException e) {
            log.error("Error - order controller - Order amount is not counted!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}
