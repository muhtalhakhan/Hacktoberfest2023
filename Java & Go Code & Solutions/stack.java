/*issue#42
  Stack Program in Java 
  */
import java.util.Scanner;

public class Main {
    static final int n = 5;
    static int top = -1;
    static int[] stack = new int[n];

    public static void main(String[] args) {
        int c, k;
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1: Push\n2: Pop\n3: Peek\n4: Display\nEnter your choice: ");
            c = scanner.nextInt();

            switch (c) {
                case 1:
                    push(scanner);
                    break;
                case 2:
                    pop();
                    break;
                case 3:
                    peek();
                    break;
                case 4:
                    display();
                    break;
                default:
                    System.out.println("Invalid input");
            }

            System.out.println("Enter 1 to continue: ");
            k = scanner.nextInt();
            if (k == 0) {
                break;
            }
        }
    }

    public static void push(Scanner scanner) {
        int x;
        System.out.print("Enter data: ");
        x = scanner.nextInt();
        if (top == n - 1) {
            System.out.println("Stack overflow");
        } else {
            top++;
            stack[top] = x;
        }
    }

    public static void pop() {
        if (top == -1) {
            System.out.println("Stack underflow");
        } else {
            System.out.println("Popped out element is: " + stack[top]);
            top--;
        }
    }

    public static void peek() {
        if (top == -1) {
            System.out.println("Stack is empty");
        } else {
            System.out.println("Peek element is: " + stack[top]);
        }
    }

    public static void display() {
        if (top == -1) {
            System.out.println("Stack is empty");
        } else {
            System.out.println("Display elements are:");
            for (int i = top; i >= 0; i--) {
                System.out.println(stack[i]);
            }
        }
    }
}
