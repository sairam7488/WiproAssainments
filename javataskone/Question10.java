package javataskone;

public class Question10 {
	    public static void main(String[] args) {
	        if (args.length == 0) {
	            System.out.println("Please provide the total number of eggs as a command line argument.");
	            return;
	        }
	        
	        try {
	            int totalEggs = Integer.parseInt(args[0]);
	            
	            int gross = totalEggs / 144;           
	            int remainderAfterGross = totalEggs % 144;
	            
	            int dozen = remainderAfterGross / 12;  
	            int leftover = remainderAfterGross % 12;
	            
	            System.out.println("Your number of eggs is " + gross + " gross, " + dozen + " dozen, and " + leftover);
	        } catch (NumberFormatException e) {
	            System.out.println("Invalid input. Please enter a valid integer for the number of eggs.");
	        }
	    }
	    }
	    
	



