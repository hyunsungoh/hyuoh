#include "aes.h"

//학번_이름
char SUBMISSION_INFO[256] = "2020123456_홍길동";


//관련 데이터 타입 정의 내역
//128-bit block
//typedef uint8_t AES_STATE_t[16];
//128-bit masterkey
//typedef uint8_t AES128_KEY_t[16];

void AES128_enc(AES_STATE_t C, AES_STATE_t P, AES128_KEY_t K128)
{
	//...
}


void AES128_dec(AES_STATE_t P, AES_STATE_t C, AES128_KEY_t K128)
{
	//...
}

//관련 데이터 타입 정의 내역
//128-bit block
//typedef uint8_t AES_STATE_t[16];
//192-bit masterkey
//typedef uint8_t AES192_KEY_t[24];

void AES192_enc(AES_STATE_t C, AES_STATE_t P, AES192_KEY_t K192)
{
	//...
}


void AES192_dec(AES_STATE_t P, AES_STATE_t C, AES192_KEY_t K192)
{
	//...
}

//관련 데이터 타입 정의 내역
//128-bit block
//typedef uint8_t AES_STATE_t[16];
//256-bit masterkey
//typedef uint8_t AES256_KEY_t[32];

void AES256_enc(AES_STATE_t C, AES_STATE_t P, AES256_KEY_t K256)
{
	//...
}


void AES256_dec(AES_STATE_t P, AES_STATE_t C, AES256_KEY_t K256)
{
	//...
}
