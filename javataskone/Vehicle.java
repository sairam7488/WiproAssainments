package javataskone;
class Vehicle {
	    String color;
	    int wheels;
	    String model;

	    Vehicle(String color, int wheels, String model) {
	        this.color = color;
	        this.wheels = wheels;
	        this.model = model;
	    }

	    void display() {
	        System.out.println("Color: " + color + ", Wheels: " + wheels + ", Model: " + model);
	    }
	}

	class Car extends Vehicle {
	    Car() {
	        super("Red", 4, "Sedan");
	    }
	    void feature() {
	        System.out.println("Car has AC");
	    }
	}

	class Bus extends Vehicle {
	    Bus() {
	        super("Blue", 6, "Volvo");
	    }
	    void feature() {
	        System.out.println("Bus has 50 seats");
	    }
	}

	class Truck extends Vehicle {
	    Truck() {
	        super("Black", 8, "TATA");
	    }
	    void feature() {
	        System.out.println("Truck carries goods");
	    }
	}

	 class Mainroad {
	    public static void main(String[] args) {
	    
	        new Car().feature();
	        new Bus().feature();
	        new Truck().feature();
	    }
	}


