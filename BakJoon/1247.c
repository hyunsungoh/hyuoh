#include <stdio.h>

int main()
{
    int     i;
    int     N;
    int    *str;
    int     S;

    scanf("%d", &N);
    for (i = 0;i < N;i++)
    {
        scanf("%d", &str[i]);
    }
    S = 0;
    for (i = 0;i < N;i++)
    {
        S += str[i];
    }
    
    if (S == 0)
        printf("0\n");
    else if (S > 0)
        printf("+\n");
    else if (S < 0)
        printf("-\n");
}