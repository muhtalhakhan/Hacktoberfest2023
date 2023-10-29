#include <iostream>
#include <string>
#include <algorithm>

// Function to check if two strings are anagrams
bool areAnagrams(const std::string& str1, const std::string& str2) {
    // Check if the lengths of the strings are the same
    if (str1.length() != str2.length()) {
        return false;
    }

    // Sort the characters in both strings
    std::string sortedStr1 = str1;
    std::string sortedStr2 = str2;
    std::sort(sortedStr1.begin(), sortedStr1.end());
    std::sort(sortedStr2.begin(), sortedStr2.end());

    // Compare the sorted strings
    return (sortedStr1 == sortedStr2);
}

int main() {
    std::string str1, str2;

    // Input two strings
    std::cout << "Enter the first string: ";
    std::cin >> str1;
    std::cout << "Enter the second string: ";
    std::cin >> str2;

    // Check if they are anagrams
    if (areAnagrams(str1, str2)) {
        std::cout << "The strings are anagrams." << std::endl;
    } else {
        std::cout << "The strings are not anagrams." << std::endl;
    }

    return 0;
}
