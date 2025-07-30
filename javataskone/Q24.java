package javataskone;

	import java.util.Scanner;

	public class Q24 {
	    public static void main(String[] args) {
	        Scanner sc = new Scanner(System.in);
	        int[] speeds = new int[5];
	        int sum = 0;

	        for (int i = 0; i < 5; i++) {
	            speeds[i] = sc.nextInt();
	            sum += speeds[i];
	        }

	        double avg = sum / 5.0;
	        System.out.println("Qualified Racers:");
	        for (int s : speeds)
	            if (s > avg) System.out.println(s);
	    }
	}


