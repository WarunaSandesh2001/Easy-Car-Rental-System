package lk.ijse.spring.repo;

import lk.ijse.spring.config.JPAConfig;
import lk.ijse.spring.entity.Customer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@WebAppConfiguration
@ContextConfiguration(classes = {JPAConfig.class})
@ExtendWith(SpringExtension.class)
class CustomerRepoTest {

    @Autowired
    CustomerRepo repo;

    @Test
    public void testSearch(){
        Optional<Customer> customer = repo.findCustomerByUsernameAndPassword("waruna", "waruna");
        Customer customer1 = customer.get();
        System.out.println(customer1);
    }

    @Test
    public void updateCustomerByStatus(){
        repo.updateCustomerStatus("C00-0001");
    }

    @Test
    public void getAll(){
       /* Customer a = repo.getReferenceById("C00-0001");*/
        List<Customer> all = repo.findAll();
    }
}