#include <stdlib.h>

int ft_strlen(char *c)
{
    int i;

    i = 0;
    while (c[i])
        i++;
    return (i);
}

char    *ft_strdup(char *str)
{
    char *p;
    char *tmp;

    p = (char*)malloc(sizeof(char)) * (ft_strlen(str) + 1);
    tmp = p;
    while (*str)
        *tmp++ = *str++;
    *tmp = '\0';
    return (p);
}