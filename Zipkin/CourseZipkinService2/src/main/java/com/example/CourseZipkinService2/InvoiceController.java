package com.example.CourseZipkinService2;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InvoiceController {

    @GetMapping("/invoice")
    public String generateInvoice() {
        return "Invoice generated successfully.";
    }
}
