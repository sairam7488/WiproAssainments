package javataskone;

public class Employee {
    private String empId;
    private String name;
    private int yearOfBirth;

    public Employee(String empId, String name, int yearOfBirth) {
        this.empId = empId;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    public void printDetails() {
        System.out.println("Employee ID: " + empId);
        System.out.println("Name: " + name);
        System.out.println("Year of Birth: " + yearOfBirth);
    }
}

