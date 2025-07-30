package javataskone;

import java.util.Scanner;

interface Minimum {
    double min(double a, double b);
}

public class Q30 {
    public static double minimum3(double a, double b, double c) {
        return Math.min(a, Math.min(b, c));
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a = sc.nextDouble(), b = sc.nextDouble(), c = sc.nextDouble();
        System.out.println("Minimum is: " + minimum3(a, b, c));
    }
}

