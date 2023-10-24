#include<stdio.h>

int main()
{

//Arm strong no: 370 =>The sum of cube of individual digit is called as Arm strong no
// 3 digits arm strong no

    int num, r, b, sum=0;

    printf("Enter any number:");
    scanf("%d",&num);

    b=num;

    while(num>0)
    {
        r=num%10;
        sum=sum+r*r*r;
        num=num/10;
    }


    if(sum==b)
    {
        printf("It is Armstrong number");
    }

    else
    {
            printf("It is Not Armstrong number");
    }

    return 0;
}
