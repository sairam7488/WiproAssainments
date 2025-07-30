package javataskone;
abstract class Bank {
    String accNo, custName, custJob;
    int custGender;
    double curBal;
    public abstract double calcBalance();
}

class Saving extends Bank {
    double savRate;
    public double calcBalance() {
        return curBal + (savRate * curBal);
    }
}

class Current extends Bank {
    boolean fixedDep;
    double curRate;
    public double calcBalance() {
        double bal = curBal + (curRate * curBal);
        return fixedDep ? bal - 150 : bal;
    }
}
