package uz.ecosmos.server.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import uz.ecosmos.server.exception.error.ErrorMessageException;
import uz.ecosmos.server.model.entity.Order;
import uz.ecosmos.server.model.repo.OrderRepo;
import uz.ecosmos.server.service.OrderService;
import uz.ecosmos.server.type.PaidStatus;

import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepo orderRepo;
    private final ErrorMessageException errorMessage = new ErrorMessageException();

    @Override
    public List<Order> getAllOrders() {
        try {
            return orderRepo.findAll();
        } catch (Exception e) {
            throw errorMessage.errorCatch("Error: Order list is not gotten! - order service", e);
        }
    }

    @Override
    public Order saveOrders(Order order) {
        try {
            order.setProductName(order.getProductName());
            order.setProductBrand(order.getProductBrand());
            order.setColor(order.getColor());
            order.setSize(order.getSize());
            order.setOrderCount(order.getOrderCount());
            order.setProductPrice(order.getProductPrice());
            order.setImage(order.getImage());
            order.setPaidStatus(PaidStatus.NO);
            return orderRepo.save(order);
        } catch (Exception e) {
            throw errorMessage.errorCatch("Error: Order list is not saved! - order service", e);
        }
    }

    @Override
    public Order deleteOrderById(long id) {
        Optional<Order> order = orderRepo.findById(id);
        try {
            if (order.isPresent()) {
                orderRepo.deleteById(id);
                return order.get();
            } else {
                throw errorMessage.errorLogic("Error: OrderID is not found! - order service ");
            }
        } catch (Exception e) {
            throw errorMessage.errorCatch("Error: Order is not deleted! - order service", e);
        }
    }

    @Override
    public long getOrderAmount() {
        long orderAmount = orderRepo.findOrderAmount();
        try {
            return orderAmount;
        } catch (Exception e) {
            throw errorMessage.errorCatch("Error: Order amount is not counted! - order service", e);
        }
    }

}
