#include<stdio.h>
#include<stdlib.h>
#define MAX 10

int n, i, j, u, v, a, b, min, mincost = 0, ne = 1;
int visited[MAX] = {0}, cost[MAX][MAX];

int main()
{
    printf("Enter the number of nodes: ");
    scanf("%d", &n);
    printf("Enter the adjacency matrix: \n");
    for(i = 1; i <= n; i++)
    {
        for(j = 1; j <= n; j++)
        {
            scanf("%d", &cost[i][j]);
            if(cost[i][j] == 0)
                cost[i][j] = 999;
        }
    }
    visited[1] = 1;
    printf("\n");
    while(ne < n)
    {
        for(i = 1, min = 999; i <= n; i++)
        {
            for(j = 1; j <= n; j++)
            {
                if(cost[i][j] < min)
                {
                    if(visited[i] != 0)
                    {
                        min = cost[i][j];
                        a = u = i;
                        b = v = j;
                    }
                }
            }
        }
        if(visited[u] == 0 || visited[v] == 0)
        {
            printf("\n Edge %d (%d %d) : %d", ne++, a, b, min);
            mincost += min;
            visited[b] = 1;
        }
        cost[a][b] = cost[b][a] = 999;
    }
    printf("\n The cost of minimum spanning tree : %d", mincost);
    return 0;
}