package com.example.CourseZipkinService;

import org.junit.jupiter.api.Test;
import com.example.CourseZipkinService.OrderServiceController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
@WebMvcTest(OrderServiceController.class)

class CourseZipkinServiceApplicationTests {


    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RestTemplate restTemplate;

    @Test
    void testPlaceOrder() throws Exception {
        // Mock the call to PaymentService
        when(restTemplate.getForObject("http://localhost:8082/payment", String.class))
                .thenReturn("Payment successful.");

        mockMvc.perform(get("/order").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string("Order placed successfully. Payment successful."));
    }
}
