package javataskone;

import java.util.Scanner;

public class Q16 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int total = 0, count = 0;
        while (count < 3) {
            System.out.printf("Enter mark (0-100) for student %d: ", count + 1);
            int mark = sc.nextInt();
            if (mark < 0 || mark > 100)
                System.out.println("Invalid input, try again...");
            else {
                total += mark;
                count++;
            }
        }
        System.out.printf("Average is: %.2f%n", total / 3.0);
    }
}
