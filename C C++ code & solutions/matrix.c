#include<stdio.h>

int main()
{
    int i,j,A[i][j],x,y,B[x][y],sum,I,J,X,Y;
    printf("Please enter the shape of matrix 1");
    scanf("%d %d",&i,&j);
    printf("Please enter the shape of matrix 2");
    scanf("%d %d",&x,&y);

    // Inputing the values for the matrix 1
    for(int I=0; I<=i; I++)
    {
        for(int J;J<=j; J++)
        {
            printf("Please enter the %d,%d term of the array",I,J);
            scanf("%d",&A[I][J]);
        }
    }

    // Inputung the values for the matrix 2
    for(int X=0; X<=x; X++)
    {
        for(int Y=0; Y<=y; Y++)
        {
            printf("Please enter the %d,%d term of the array",X,Y);
            scanf("%d",&B[X][Y]);
        }
    }

    // Multiplying the two matrix
    int p,q,c[i][y];
    if(j==x)
    {
        
        for(int p=0; p<=i;p++)
        {
            for(int q=0; q<=y; q++)
            {
                sum =0 ;
                for(int c=0; c<=j; c++)
                {
                    sum = sum + (A[p][c]*B[c][q]);

                }
                c[p][q] = sum;
            }
        }
    }
    else
    {
        printf("Not Posiible");
    }

    printf("%f", c[i][y]);
    getchar();
    return 0;
}
