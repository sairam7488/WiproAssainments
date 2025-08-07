package Exercise13.postmanCRUD.repository;

import Exercise13.postmanCRUD.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {}
