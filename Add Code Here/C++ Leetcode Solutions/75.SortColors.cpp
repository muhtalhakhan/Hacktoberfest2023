// Sort an array of 0's 1's & 2's
// Problem link: https://leetcode.com/problems/sort-colors/

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void sortColors(vector<int>& nums) {
        // Three pointer approach -> Duch national flag algo
        int n = nums.size();
        int low = 0, mid = 0, high = n-1;
        while(mid <= high)
        {
            if(nums[mid] == 0)
            {
                swap(nums[low], nums[mid]);
                low++;
                mid++;
            }
            else if(nums[mid] == 1)
                mid++;
            else if(nums[mid] == 2)
            {
                swap(nums[mid], nums[high]);
                high--;
            }
        }
    }
};
int main()
{
          int n;
          cin>>n;
          vector<int> nums(n);
          for(int i = 0; i < n; i++)
                    cin>>nums[i];
          Solution obj;
          obj.sortColors(nums);
          for(int i = 0; i < n; i++)
                    cout<<nums[i]<<" ";
}
