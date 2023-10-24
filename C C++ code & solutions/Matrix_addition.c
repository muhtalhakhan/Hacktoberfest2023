//Write a c program to perform the addition of two matrices of size 3X3
//program

#include<stdio.h>
int main()
{
    int a[3][3];
    int b[3][3];
    int sum[3][3];
    int i,j;

    printf("Name-Devansh Palsapure Roll no-34\n");

    printf("Enter the first 3X3 matrix:");
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            scanf("%d",&a[i][j]);
        }
    }

    printf("Enter the second 3X3 matrix:");
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            scanf("%d",&b[i][j]);
        }
    }

    for(i=0; i<3; i++)
    {
        for(j=0; j<3; j++)
        {
            sum[i][j]=a[i][j]+b[i][j];
        }
    }


    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            printf("%d ",sum[i][j]);
        }
        printf("\n");
    }

    return 0;
}
