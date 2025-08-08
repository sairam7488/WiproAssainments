package com.example.CourseZipkinService2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TransactionController {

    @GetMapping("/transaction")
    public String completeTransaction() {
        return "Transaction completed successfully.";
    }
}

