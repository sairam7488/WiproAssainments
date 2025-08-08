package com.example.CourseZipkinService2;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BillingController {

    @GetMapping("/billing")
    public String processBilling() {
        return "Billing processed successfully.";
    }
}

