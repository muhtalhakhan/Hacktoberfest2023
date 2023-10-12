// write a program in c for palindrome check

#include<stdio.h>
#include<string.h>

int main()
{
    char str[100];
    int i, len, flag;

    printf("Enter a string: ");
    gets(str);

    len = strlen(str);

    flag = 0;

    for(i=0; i<len; i++)
    {
        if(str[i] != str[len-i-1])
        {
            flag = 1;
            break;
        }
    }

    if(flag == 0)
    {
        printf("\n%s is a palindrome\n", str);
    }
    else
    {
        printf("\n%s is not a palindrome\n", str);
    }

    return 0;
}