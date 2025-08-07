package com.example.demo;

import java.util.Arrays;
import java.util.List;

@RestController
public class CustomerController {

    @GetMapping("/customers")
    public List<Customer> getCustomers() {
        return Arrays.asList(
            new Customer(101, "John", "Doe", "john@example.com", "1234567890", 1625078400000L),
            new Customer(102, "Jane", "Smith", "jane@example.com", "0987654321", 1625164800000L)
        );
    }
}
