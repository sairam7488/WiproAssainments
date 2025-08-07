package com.sairam.restaurant_producer.controller;



import com.sairam.restaurant_producer.model.Restaurant;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RestaurantController {

    @GetMapping("/restaurants")
    public List<Restaurant> getAllRestaurants() {
        return List.of(
            new Restaurant(1, "Paradise Biryani", "Hyderabad"),
            new Restaurant(2, "Barbeque Nation", "Bangalore"),
            new Restaurant(3, "Anjappar", "Chennai")
        );
    }
}
