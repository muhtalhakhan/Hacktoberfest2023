#include<bits/stdc++.h>
using namespace std;
long long maxSubarraySum(vector<long long int> arr, long long int n)
{
    
    long long sum=0,ans=INT_MIN;
    int j=0;
    while(j<n){

        sum+=arr[j];
        if(sum>ans){
            ans=sum;
        }

        if(sum<0){
            sum=0;
        }

        j++;
    }
    if(ans<0)return 0;
    return ans;
}
int main(){
long long int n;
cin>>n;
vector<long long int> v;
for (int i = 0; i < n; i++)
{
   long long int x;
   cin>>x;
   v.push_back(x);

}

cout<<maxSubarraySum(v,n)<<endl;
}
