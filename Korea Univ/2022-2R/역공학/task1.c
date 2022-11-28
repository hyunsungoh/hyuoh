#include <stdio.h>
#include <string.h>

int sub_140001300(int *a1, unsigned int a2, int *a3, int a4, char a5, char a6)
{
    int i;
    if (a2 != a4)
        return 0xFFFFFFFF;
    for (i = 0; i < a2; ++i)
        *(a1 + i) = (a6 * i) ^ a5 ^ *(a3 + i);
    if (a2)
        *(a2 + a1 - 1) = 0;
    return 0;
}

int main()
{
    int Str2[20] = {0};
    int aJvUlHBvxrEc1d[20] = {0x4a, 0x56, 0x28, 0x75, 0x6c, 0x7d, 0x68, 0x7d, 0x62, 0x76, 0x58, 0x72, 0x28, 0x45, 0x43, 0x31, 0x44, 0x5b, 0x40};

    sub_140001300(Str2, 20, aJvUlHBvxrEc1d, 20, 1, 2);

    for (int i = 0; i < 20; i++)
    {
        printf("Str2[%d] is %d\n", i, Str2[i]);
    }

    return 0;
}