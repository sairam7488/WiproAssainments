package javataskone;

class InvalidEmployeeCode extends Exception {
    public InvalidEmployeeCode(String message) {
        super(message);
    }
}

public class Q35 {
    public static void main(String[] args) {
        try {
            java.util.Scanner sc = new java.util.Scanner(System.in);
            System.out.print("Enter employee code (yy-X-xxx): ");
            String empCode = sc.nextLine();

            if (!empCode.matches("\\d{2}-[FS]-\\d{3}")) {
                throw new InvalidEmployeeCode("Invalid Employee Code Format");
            }

            System.out.println("Valid Code: " + empCode);
            Employee emp = new Employee(empCode, "John", 1981);
            emp.printDetails();
        } catch (InvalidEmployeeCode e) {
            System.out.println(e.getMessage());
        }
    }
}
