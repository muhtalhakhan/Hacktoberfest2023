// Scramble String
// Problem link: https://leetcode.com/problems/scramble-string/

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    map<string, bool> mp;
    bool solve(string s1, string s2)
    {
        if(s1.compare(s2) == 0) return true;
        // if any of the string length is <= 1 then its one or both the child will be empty. 
        if(s1.length() <= 1) return false; 
        
        string key = s1+" "+s2;
        if(mp.find(key) != mp.end()) return mp[key];
        int n = s1.size();
        bool flag = false;
        for(int k = 1; k < n; k++)
        {
            // when first partition of string s1 matches the second partition of string s2 and vice-versa
            // s1 = gr|eat ; s2 = eat|gr  
            bool cond1 = solve(s1.substr(0,k),s2.substr(n-k)) && solve(s1.substr(k),s2.substr(0,n-k));
            // when first partition of string s1 matches the first partition of string s2 and second part matches second
            // s1 = gr|eat ; s2 = gr|ate
            bool cond2 = solve(s1.substr(0,k),s2.substr(0,k)) && solve(s1.substr(k),s2.substr(k));
                                
            if(cond1 || cond2)
            {
                flag = true;
                break;
            }                    
        }
        
        return mp[key] = flag; 
    }
    bool isScramble(string s1, string s2) {
        if(s1.size() != s2.size()) return false;
        if(s1.empty() && s2.empty()) return true;
        
        return solve(s1, s2);
    }
};

int main()
{
        string s1, s2;
        cin>>s1>>s2;
        Solution ob;
        cout<<ob.isScramble(s1, s2)<<endl;
    return 0;
}
