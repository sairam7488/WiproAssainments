package com.sairam.restaurant_consumer.controller;


import com.sairam.restaurant_consumer.client.RestaurantClient;
import com.sairam.restaurant_consumer.model.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class RestaurantConsumerController {

    @Autowired
    private RestaurantClient restaurantClient;

    @GetMapping("/consumer/restaurants")
    public List<Restaurant> getRestaurants() {
        return restaurantClient.getRestaurants();
    }
}
