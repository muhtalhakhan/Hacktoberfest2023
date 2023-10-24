/*
issue#3
name:maneesha
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
This problem is also the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra.
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
*/
class Main {
public static void main(String[] args) {
int n = 10; // number of elements in array
int arr[] = new int[]{1,2,0,1,2,0,2,2,2,2,}; // input array
sor(arr,n);
for(int i:arr)
System.out.print(i+" ");
}
public static void sor(int arr[],int n)
{
int l=0,m=0,h=n-1;//treat as pointers/indices of an array
while(m<=h){
if(arr[m]==0){
s(arr,m,l);
m++;
l++;
}
else if(arr[m]==1)
{
m++;
}
else{
s(arr,m,h);
h--;
}
}
}
public static void s(int arr[],int i,int j){
int t=arr[i];
arr[i]=arr[j];
arr[j]=t;
}
}
