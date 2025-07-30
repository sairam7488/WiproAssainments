package javataskone;

import java.util.*;

public class Q26 {
    public static void main(String[] args) {
        int[] input = {2, 3, 54, 1, 6, 7, 7};
        Set<Integer> unique = new HashSet<>();
        int sum = 0;
        for (int i : input) {
            if (unique.add(i) && i % 2 == 0)
                sum += i;
        }
        System.out.println("Sum of even numbers: " + sum);
    }
}
