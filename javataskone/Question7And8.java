package javataskone;
import java.util.Scanner;

public class Question7And8 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input: Number of classes held
        System.out.print("Enter number of classes held: ");
        int totalClasses = scanner.nextInt();

        // Input: Number of classes attended
        System.out.print("Enter number of classes attended: ");
        int attendedClasses = scanner.nextInt();

        // Calculate attendance percentage
        double attendancePercentage = ((double) attendedClasses / totalClasses) * 100;

        // Display attendance percentage
        System.out.println("Attendance Percentage: " + attendancePercentage + "%");

        // Check eligibility
        if (attendancePercentage >= 70) {
            System.out.println(" Student is allowed to sit in the exam.");
        } else {
            System.out.print("Do you have a medical cause? (Y/N): ");
            char medicalCause = scanner.next().charAt(0);

            if (medicalCause == 'Y' || medicalCause == 'y') {
                System.out.println(" Student is allowed to sit in the exam due to medical cause.");
            } else {
                System.out.println(" Student is NOT allowed to sit in the exam.");
            }
        }
        scanner.close();
    }
}


