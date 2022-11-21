#include <stdio.h>
#include <string.h>

int main(int argc, char **argv)
{
    if (argc != 2)
    {
        printf("Wrong Input !!!");
        return 0;
    }

    int     i, j, len;
    char    *str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int     count[26] = {0};
    double  probability[26];

    // str = fgets(argv[1], 1000, *stream);
    len = strlen(argv[1]);


    j = 0;
    for (i = 0;i < len;i++)
    {
        while (argv[1][j])
        {
            if (argv[1][j] == str[i])
                count[i] += 1;
            j++;
        }
    }
    // *count에 이제 A부터 Z까지 각 문자의 개수가 들어있다

    printf("item\t    probability\tletter\n");
    for (i = 0; i < 26;i++)
    {
        probability[i] = (double)count[i] / (double)len;
        printf("argv[%d]       %.3f\t\t%d\n", i, probability[i], count[i]);
    }
    // 26p 빈도수 그대로 프린트



    return 0;
}