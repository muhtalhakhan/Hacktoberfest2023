/*

Write a menu driven program to check for the following 
                             i)even or odd
							 ii)positiv, negative or zero
    						 iii) Prime
							 iv) Palindrome number
							 v) Armstring number
							 vi) Exit
*/

#include<stdio.h>
#include<stdlib.h>
int main()
{

    printf("Name-Devansh Palsapure \tRoll no- 34");
    int num, i, count, r, b, sum;
    int ch;

    while(1)
    {
        printf("\n 1 for checking ever or odd number");
        printf("\n 2 for checking Postive, negative or zero");
        printf("\n 3 for checking Prime number");
        printf("\n 4 for checking Palindrome number");
        printf("\n 5 for checking Armstrong number");
        printf("\n 6 for Exit");
        printf("\n");
        scanf("%d",&ch);



        switch (ch)
        {
        case 1: 
        printf("\n\nEnter a number: ");
        scanf("%d",&num);
        if(num%2==0)
            {
                printf("\nEven number");
            }
            else
            {
                printf("\n Odd number");
            }
            break;

        case 2:
        printf("\n\nEnter a number: ");
        scanf("%d",&num);        
         if(num>0)
            {
                printf("\nPositive number");
            }
            else
            {
                if(num<0)
                {
                    printf("\nNegative number");
                }

                else
                {
                    printf("Zero");
                }
            }
            break;

        case 3:
        printf("\n\nEnter a number: ");
        scanf("%d",&num);
         for(i=1;i<=num;i++)
            {
                if(num%i==0)
                {
                    count++;
                }
            }
            if(count>=2)
            {
                printf("\n not a prime number");
            }
            else
            {
                printf("\n Prime number");
            }
            break;

            
        case 4:
        printf("\n\nEnter a number: ");
        scanf("%d",&num); 
        b=num;
        while(num>0)
            {
                r=num%10;
                sum=sum*10+r;
                num=num/10; 
            }

        if(sum==b)
            {
               printf("palindrome no");
            }

        else{
                printf("not palindrome no");
        }
        break;        

        case 5:
        printf("\n\nEnter a number: ");
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
                printf("Arm strong number");
            }

        else
        {
        printf("Not Arm strong number");
        }
        break;  

        case 6: 
            exit(0);
        break;  
    }

    return 0;}
}
