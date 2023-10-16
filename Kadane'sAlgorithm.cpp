The simple approach to solve this problem is to run two for loops and for every subarray check if it is the maximum sum possible. Follow the below steps to solve the problem.

Run a loop for i from 0 to n – 1, where n is the size of the array.
Now, we will run a nested loop for j from i to n – 1 and add the value of the element at index j to a variable currentMax.
Lastly, for every subarray, we will check if the currentMax is the maximum sum of all contiguous subarrays
#include <algorithm>
#include <iostream>
#include <bits/stdc++.h>

using namespace std;
int maximumSubarraySum(vector < int > arr) {
  int n = arr.size();
  int maxSum = INT_MIN;

  for (int i = 0; i <= n - 1; i++) {
    int currSum = 0;
    for (int j = i; j <= n - 1; j++) {
      currSum += arr[j];
      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }

  return maxSum;
}
int main() {
    vector<int> a = {1, 3, 8, -2, 6, -8, 5};
    cout << maximumSubarraySum(a) << endl;
    return 0;
}
