n)
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
