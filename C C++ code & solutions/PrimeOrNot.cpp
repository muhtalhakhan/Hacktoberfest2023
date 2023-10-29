Question : https://practice.geeksforgeeks.org/problems/prime-number2314/1
Solution : 

#include <bits/stdc++.h>

int main() {

  int n, i, flag = 0;
   cout<<"Enter a postive number"<<endl;
   cin>>n;

  // 0 and 1 are not prime numbers
  // change flag to 1 for non-prime number
  if (n == 0 || n == 1)
    flag = 1;

  for (i = 2; i <= n / 2; ++i) {

    // if n is divisible by i, then n is not prime
    // change flag to 1 for non-prime number
    if (n % i == 0) {
      flag = 1;
      break;
    }
  }

  // flag is 0 for prime numbers
  if (flag == 0)
    cout<< n << " :is a prime number"<<endl;
  else
    cout<< n << " :is not a prime number"<<endl;

  return 0;
}
