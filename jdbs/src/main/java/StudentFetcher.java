

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class StudentFetcher {
    public static void main(String[] args) {
        Connection con = null;
        Statement st = null;
        ResultSet rs = null;

        try {
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wipro2025", "root", "sairam");
            st = con.createStatement();
            rs = st.executeQuery("SELECT * FROM Student");

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                String course = rs.getString("course");
                float marks = rs.getFloat("marks");

                System.out.println(id + " " + name + " " + age + " " + course + " " + marks);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (rs != null)
                    rs.close();
                if (st != null)
                    st.close();
                if (con != null)
                    con.close();
            } catch (Exception e) {
                System.out.println("Finally Block:: " + e);
            }
        }
    }
}
/*1 Alice 20 Computer Science 87.5
2 Bob 21 IT 78.0
3 Charlie 22 Electronics 92.3*/

