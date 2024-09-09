package uz.ecosmos.server.service;

import uz.ecosmos.server.model.entity.Order;

import java.util.List;

public interface OrderService {

    List<Order> getAllOrders();

    Order saveOrders(Order order);

    Order deleteOrderById(long id);

    long getOrderAmount();


}
