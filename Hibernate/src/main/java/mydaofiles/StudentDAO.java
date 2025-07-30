package mydaofiles;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import mypojos.Student_123;

public class StudentDAO {

    private SessionFactory factory;

    public StudentDAO() {
        factory = new Configuration().configure("wiprohibernate.cfg.xml").buildSessionFactory();
    }

    //INSERT
    public void addStudent(Student_123 student)
    {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        session.save(student);//SAVING OBJECT=>INSERT INTO TABLENAME VALUES
        tx.commit();
        session.close();   
    }
    
    public boolean updateStudent(Student_123 student) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        Student_123 existing = (Student_123) session.get(Student_123.class, student.getId());//SELECT SPECIFIC RECORD
        if (existing != null) {
            existing.setName(student.getName());
            existing.setEmail(student.getEmail());

            session.update(existing);//UPDATE TABLENAME SET COLUMNNAME=VALUE
            tx.commit();
            
            session.close();
            return true;
        } else {
            session.close();
            return false;
        }
    }
        
        public boolean deleteStudent(int id) {
            Session session = factory.openSession();
            Transaction tx = session.beginTransaction();
            Student_123 student = (Student_123) session.get(Student_123.class, id);//SELECT SPECIFIC RECORD
            if (student != null) {
                session.delete(student);//DELETE FROM STUDENT WHERE STUDID=?
                tx.commit();    	
            	session.close();
                return true;
            } else {
                session.close();
                return false;
            }
        }
            public Student_123 getStudent(int id) {
                Session session = factory.openSession();
                Student_123 student = (Student_123) session.get(Student_123.class, id);//SELECT SPECIFIC RECORD
                session.close();
                return student;
            }
            
            public List<Student_123> getAllStudents() {
                Session session = factory.openSession();
                List<Student_123> list = session.createQuery("from Student_123").list();  // HQL /JPQL Hibernate 4.3 style
                session.close();//from Student_123 => from Entityclass/Pojoclass (NO TABLENAME/RAW SQL COMMAND)
                return list;
            }



    
        
}

