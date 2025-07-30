package javataskone;
import java.util.Scanner;
import java.time.Year;

public class QuestionFive {
	public static void main(String[] args) {
		int salary = 50000;
		int currentyear = Year.now().getValue();
		Scanner scanner = new Scanner(System.in);
		int JoinYear = scanner.nextInt();
		System.out.println(" Enter the joining Year" + JoinYear);
		if( currentyear - JoinYear > 6);
		float bonus = salary * 0.10f;
		System.out.println(" bonus amount == " + bonus);
		
	}

}
