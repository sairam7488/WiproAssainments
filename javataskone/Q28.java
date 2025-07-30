package javataskone;

interface PerformOperation {
    boolean check(int a);
}

public class Q28 {
    public static PerformOperation isOdd() {
        return a -> a % 2 != 0;
    }

    public static PerformOperation isPrime() {
        return a -> {
            if (a <= 1) return false;
            for (int i = 2; i <= Math.sqrt(a); i++)
                if (a % i == 0) return false;
            return true;
        };
    }

    public static PerformOperation isPalindrome() {
        return a -> {
            String s = String.valueOf(a);
            return s.equals(new StringBuilder(s).reverse().toString());
        };
    }
}
