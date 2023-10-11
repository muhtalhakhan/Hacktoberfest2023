// Minimum Operations to Reduce X to Zero
// Problem link:
// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minOperations(vector<int>& arr, int x) {
        // compute sum of the entire array 
        int total_sum = accumulate(arr.begin(), arr.end(), 0LL);
        // Sum of remaining elements
        int target = total_sum-x;
        
        // sliding window technique 
        int start_idx = 0, curr_sum = 0, len = 0;
        int found = false;
        for(int end_idx = 0; end_idx < arr.size(); end_idx++)
        {
            curr_sum += arr[end_idx];
            // if sum of current subaaray is greater than desired sum
            while(start_idx <= end_idx && curr_sum > target)
            {
                curr_sum -= arr[start_idx];
                start_idx++;
            }
            if(curr_sum == target)
            {
                found = true;
                len = max(len, end_idx - start_idx + 1);
            }
        }
        
        return found ? arr.size() - len : -1;
    }
};
