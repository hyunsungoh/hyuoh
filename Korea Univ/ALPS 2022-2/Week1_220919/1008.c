#include <stdio.h>

int main()
{
    int A;
    int B;
    
    scanf("%d", &A);
    scanf("%d", &B);
    
    printf("%.10f", (double) A / (double) B);
}