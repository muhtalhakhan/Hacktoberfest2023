/*
issue#3
Name: maneesha
--Given an array arr[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.
--This problem is also the same as the famous “Dutch National Flag problem”.
Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}
Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
>>time complexity-O(n)
*/
//solution
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
