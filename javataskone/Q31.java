package javataskone;

import java.util.*;

public class Q31 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            int n = sc.nextInt();  // InputMismatchException
            String str = "Hi";
            System.out.println(str.charAt(5)); // StringIndexOutOfBounds
        } catch (InputMismatchException e) {
            System.out.println("Input error: " + e);
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("String error: " + e);
        }
    }
}

