#include <iostream>
#include <climits>


class StackUsingArray {

    int *data;
    int nextIndex;
    int capacity;

    public:

    StackUsingArray(int totalSize){
        data = new int[totalSize];
        nextIndex = 0;
        capacity = totalSize;
    }

    //return the numder of elements present in my stack
    int size() {
        return nextIndex;
    }

    //check if the stack is empty or not
    bool isEmpty() {

        /* if (nextIndex == 0) {
            return true;
        }
        else {
            return false;
        }
        */
       // OR IN SHORT FORM

       return nextIndex == 0;
    }

    //Inserting an element in the stack

    void push(int element){

        if (nextIndex == capacity){
            cout << "stack is full !!" << endl;
            return;
        }
        data[nextIndex] = element;
        nextIndex++;
    }

    int pop() {
        if (isEmpty()) {
            cout << "stack is empty !!" << endl;
            return INT_MIN;
        }
        nextIndex--;
        return data[nextIndex];
    }

    int top() {
        if(isEmpty()) {
            cout << "stack is empty !!" << endl;
            return INT_MIN;
        }
        return data[nextIndex - 1];
    }
};