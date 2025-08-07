package com.example.restaurantapi.controller;

import com.example.restaurantapi.entity.Restaurant;
import com.example.restaurantapi.entity.Food;
import com.example.restaurantapi.repository.RestaurantRepository;
import com.example.restaurantapi.repository.FoodRepository;
import com.example.restaurantapi.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private FoodRepository foodRepository;

    // Create new restaurant
    @PostMapping
    public ResponseEntity<Restaurant> createRestaurant(@Valid @RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantRepository.save(restaurant));
    }

    // Get all restaurants
    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    // Get restaurant by ID
    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> getRestaurantById(@PathVariable Long id) {
        Restaurant r = restaurantRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Restaurant not found with id " + id));
        return ResponseEntity.ok(r);
    }

    // Delete restaurant by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRestaurant(@PathVariable Long id) {
        Restaurant r = restaurantRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Restaurant not found with id " + id));
        restaurantRepository.delete(r);
        return ResponseEntity.noContent().build();
    }

    // Add food to restaurant
    @PostMapping("/{id}/foods")
    public ResponseEntity<Food> addFoodToRestaurant(@PathVariable Long id, @Valid @RequestBody Food food) {
        Restaurant restaurant = restaurantRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Restaurant not found with id " + id));
        food.setRestaurant(restaurant);
        return ResponseEntity.ok(foodRepository.save(food));
    }

    // Delete a food item
    @DeleteMapping("/foods/{foodId}")
    public ResponseEntity<Void> deleteFoodById(@PathVariable Long foodId) {
        Food food = foodRepository.findById(foodId)
            .orElseThrow(() -> new ResourceNotFoundException("Food not found with id " + foodId));
        foodRepository.delete(food);
        return ResponseEntity.noContent().build();
    }
}

