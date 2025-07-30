package javataskone;

import java.util.NoSuchElementException;
import java.util.Scanner;

public class Q29 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String regNo = sc.next();
        String mobile = sc.next();

        try {
            if (regNo.length() != 9)
                throw new IllegalArgumentException("Invalid Register Number Length");

            if (!regNo.matches("[a-zA-Z0-9]+"))
                throw new NoSuchElementException("Invalid characters in RegNo");

            if (mobile.length() != 10)
                throw new IllegalArgumentException("Invalid Mobile Number Length");

            if (!mobile.matches("\\d+"))
                throw new NumberFormatException("Non-digit in Mobile Number");

            System.out.println("Valid");
        } catch (Exception e) {
            System.out.println("Invalid: " + e);
        }
    }
}
