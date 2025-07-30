package javataskone;

	class Q13 {
	    void area(int side) { System.out.println("Square Area: " + (side * side)); }
	    void area(int l, int b) { System.out.println("Rectangle Area: " + (l * b)); }
	    void perimeter(int side) { System.out.println("Square Perimeter: " + (4 * side)); }
	    void perimeter(int l, int b) { System.out.println("Rectangle Perimeter: " + (2 * (l + b))); }

	    public static void main(String[] args) {
	        Q13 s = new Q13();
	        s.area(5);
	        s.area(4, 6);
	        s.perimeter(5);
	        s.perimeter(4, 6);
	    }
	}


