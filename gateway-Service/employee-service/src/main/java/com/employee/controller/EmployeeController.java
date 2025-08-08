package com.employee.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @GetMapping("/{id}")
    public String getEmployee(@PathVariable int id, @RequestHeader(value = "X-Request-Gateway", required = false) String gatewayHeader) {
        return "Employee ID: " + id + " | Header from Gateway: " + gatewayHeader;
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Employee Service";
    }
}
