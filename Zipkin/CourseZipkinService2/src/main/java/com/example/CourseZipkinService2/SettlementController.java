package com.example.CourseZipkinService2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SettlementController {

    @GetMapping("/settlement")
    public String settlePayment() {
        return "Payment settled successfully.";
    }
}

