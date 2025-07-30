package javataskone;

class LowSalException extends Exception {
    public LowSalException(String msg) {
        super(msg);
    }
}

class Emp {
    private int empId;
    private String empName;
    private String designation;
    private double basic;
    private final double hra;

    public Emp(int empId, String empName, String designation, double basic) throws LowSalException {
        if (basic < 50000) throw new LowSalException("Basic salary cannot be less than 50000.");
        this.empId = empId;
        this.empName = empName;
        this.designation = designation;
        this.basic = basic;
        this.hra = calculateHRA();
    }

    private double calculateHRA() {
        return switch (designation) {
            case "Manager" -> 0.10 * basic;
            case "TeamLeader" -> 0.12 * basic;
            case "HR" -> 0.05 * basic;
            default -> 0;
        };
    }

    public void printDET() {
        System.out.println("ID: " + empId + ", Name: " + empName + ", Designation: " + designation);
        System.out.println("Basic: " + basic + ", HRA: " + hra);
    }
}
