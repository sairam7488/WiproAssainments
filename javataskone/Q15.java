package javataskone;

import java.util.HashMap;

public class Q15 {
    public static void main(String[] args) {
        int[] arr = {1,2,2,3,4,4,4,5,5,5};
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i : arr) map.put(i, map.getOrDefault(i, 0) + 1);
        map.forEach((k,v) -> System.out.println(k + " occurs " + v + " times"));
    }
}

