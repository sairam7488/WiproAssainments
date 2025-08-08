package com.example.CourseZipkinService2;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.CourseZipkinService.OrderServiceController;
import com.example.CourseZipkinService2.PaymentController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
@WebMvcTest(PaymentController.class)
class CourseZipkinService2ApplicationTests {

	 @Autowired
	    private MockMvc mockMvc;

	    @Test
	    void testMakePayment() throws Exception {
	        mockMvc.perform(get("/payment"))
	                .andExpect(status().isOk())
	                .andExpect(content().string("Payment successful."));
	    }
	}