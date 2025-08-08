package com.example.CourseZipkinService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/order")
public class OrderServiceController {

    private static final Logger logger = LoggerFactory.getLogger(OrderServiceController.class);

    private final RestTemplate restTemplate;

    public OrderServiceController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping
    public String placeOrder() {
        logger.info("Order placed. Calling Payment Service...");

        String response = restTemplate.getForObject("http://localhost:8082/payment", String.class);

        logger.info("Response from Payment Service: {}", response);

        return "Order placed successfully. " + response;
    }
}
