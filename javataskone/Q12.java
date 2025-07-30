package javataskone;

	abstract class Q12 {
	    String name;
	    double salaryRate;
	    abstract double pay(int hours);
	}

	class DailyWorker extends Q12 {
	    public DailyWorker(String n, double r) { name = n; salaryRate = r; }
	    double pay(int hours) { return salaryRate * hours; }
	}

	class SalariedWorker extends Q12 {
	    public SalariedWorker(String n, double r) { name = n; salaryRate = r; }
	    double pay(int hours) { return salaryRate * 40; }
	}


