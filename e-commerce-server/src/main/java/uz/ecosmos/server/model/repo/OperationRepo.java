package uz.ecosmos.server.model.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.ecosmos.server.model.entity.Operation;


public interface OperationRepo extends JpaRepository<Operation, Long> {
}
