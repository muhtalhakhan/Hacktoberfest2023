#include <iostream>
#include <string>

using namespace std; // Use the standard namespace for input and output

// Function to check if a given string is a palindrome
bool isPalindrome(const string& str) {
    int left = 0;
    int right = str.length() - 1;

    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

int main() {
    string input;
    
    // Prompt the user to enter a string
    cout << "Enter a string: ";
    cin >> input;

    // Check if the input string is a palindrome
    if (isPalindrome(input)) {
        cout << input << " is a palindrome." << endl;
    } else {
        cout << input << " is not a palindrome." << endl;
    }

    return 0;
}
