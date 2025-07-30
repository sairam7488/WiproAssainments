package javataskone;

import java.io.*;
import java.util.Scanner;

public class Q37 {
    public static void main(String[] args) {
        File file = new File("batchmates.txt");

        try (PrintWriter pw = new PrintWriter(new FileWriter(file))) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter names (type 'stop' to end):");
            while (true) {
                String name = sc.nextLine();
                if (name.equalsIgnoreCase("stop")) break;
                pw.println(name);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            System.out.println("Batchmates:");
            br.lines().forEach(System.out::println);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
