class Solution {
public:
    vector<int> leftRightDifference(vector<int>& nums) {
        
        int s=nums.size();
        vector<int>n=nums;
            vector<int>m=nums;
        vector<int>r(s);
        for(int i=s-2;i>-1;i--)
        {
            m[i]=m[i]+m[i+1];
        }
        for(int i=1;i<s;i++)
        {
            n[i]=n[i]+n[i-1];
            
        }
        for(int i=0;i<s;i++)
        {
            r[i]=abs(n[i]-m[i]);
        }
        return r;
    }
};
