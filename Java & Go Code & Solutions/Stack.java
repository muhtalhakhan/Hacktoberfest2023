//This is the code for implementing Stack in Java

public class Stack {
    private int maxSize;
    private int top;
    private int[] stackArray;

    public Stack(int size) {
        maxSize = size;
        stackArray = new int[maxSize];
        top = -1; // Initialize top as -1 to indicate an empty stack.
    }

    public void push(int value) {
        if (isFull()) {
            System.out.println("Stack is full. Cannot push " + value);
        } else {
            top++;
            stackArray[top] = value;
        }
    }

    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack is empty. Cannot pop.");
            return -1;
        } else {
            int poppedValue = stackArray[top];
            top--;
            return poppedValue;
        }
    }

    public int peek() {
        if (isEmpty()) {
            System.out.println("Stack is empty. Cannot peek.");
            return -1;
        } else {
            return stackArray[top];
        }
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public boolean isFull() {
        return top == maxSize - 1;
    }

    public int size() {
        return top + 1;
    }

    public static void main(String[] args) {
        Stack stack = new Stack(5);

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        System.out.println("Peek: " + stack.peek());
        System.out.println("Pop: " + stack.pop());

        System.out.println("Is Stack empty? " + stack.isEmpty());
        System.out.println("Is Stack full? " + stack.isFull());
        System.out.println("Stack size: " + stack.size());
    }
}