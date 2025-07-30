package javataskone;

public class MyTriangle {
    public static boolean isValid(double a, double b, double c) {
        return a + b > c && b + c > a && a + c > b;
    }

    public static double area(double a, double b, double c) {
        double s = perimeter(a, b, c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    public static double perimeter(double a, double b, double c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        while (true) {
            System.out.print("Enter side a (-1 to exit): ");
            double a = sc.nextDouble();
            if (a == -1) {
                System.out.println("Bye~");
                break;
            }
            double b = sc.nextDouble();
            double c = sc.nextDouble();

            if (isValid(a, b, c)) {
                System.out.println("Area: " + area(a, b, c));
                System.out.println("Perimeter: " + perimeter(a, b, c));
            } else {
                System.out.println("The input is invalid.");
            }
        }
    }
}
