package com.sairam.restaurant_consumer.model;



public class Restaurant {
    private int id;
    private String name;
    private String location;

    public int getId() { return id; }
    public String getName() { return name; }
    public String getLocation() { return location; }

    public void setId(int id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setLocation(String location) { this.location = location; }
}
