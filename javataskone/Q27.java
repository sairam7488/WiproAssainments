package javataskone;

enum Currency {
    ONE, FIVE, TEN, TWENTY, FIFTY, HUNDRED
}

public class Q27 {
    public static void main(String[] args) {
        for (Currency c : Currency.values()) {
            System.out.println(c);
            switch (c) {
                case ONE -> System.out.println("Rs.1 Coin");
                case FIVE -> System.out.println("Rs.5 Coin");
                case TEN -> System.out.println("Rs.10 Note");
                case TWENTY -> System.out.println("Rs.20 Note");
                case FIFTY -> System.out.println("Rs.50 Note");
                case HUNDRED -> System.out.println("Rs.100 Note");
            }
        }
    }
}

