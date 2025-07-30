package javataskone;

class Tank {
    private boolean released = false;

    public void fill() {
        System.out.println("Tank filled");
    }

    public void empty() {
        System.out.println("Tank emptied");
        released = true;
    }

    protected void finalize() {
        if (!released) {
            System.out.println("Error: Tank not released!");
        } else {
            System.out.println("Tank released correctly");
        }
    }
}

public class Q36 {
    public static void main(String[] args) {
        Tank t1 = new Tank();
        t1.fill();
        t1.empty();
        t1 = null;
        System.gc();  // Request garbage collection
    }
}
