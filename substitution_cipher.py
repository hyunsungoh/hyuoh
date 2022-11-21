import string
import operator

str = "RGCTBHBYRDIDKRNPZUTWLDEDNRCCULEUMNUBYITCTEPLCNNYRNBTIKDKNKTWEMTFDIECDKNTWM\
UBTMLKBRCCULGCTBHKNYRNRMUKUBOMUCPCDIHULNTEUNYUMOKDIEBMPZNTEMRZYPURBYGCTBHB\
TINRDIKRBMPZNTEMRZYDBYRKYTWNYUZMUADTOKGCTBHRNDXUKNRXZRILNMRIKRBNDTILRNREUI\
UMRCCPMUZMUKUINULRKRXUMHCUNMUUFYUMULRNRITLUKRMUMUZMUKUINULGPCURWKNYUNDXUKN\
RXZZMTAUKNYRNNYUNMRIKRBNDTILRNRUJDKNULFYUINYUGCTBHFRKBMURNULKDIBUURBYGCTBH\
BTINRDIKDIWTMXRNDTIRGTONNYUGCTBHZMUADTOKNTDNNYUPUWWUBNDAUCPWTMXRBYRDIBTXZR\
MUCDIHULCDKNLRNRKNMOBNOMUFDNYURBYRLLDNDTIRCGCTBHCDIHDIENTNYUTIUKGUWTMUDNBT\
IKUSOUINCPGCTBHBYRDINMRIKRBNDTIKRMUDMMUAUMKDGCUDINYRNTIBUNYUPRMUMUBTMLULNY\
ULRNRDIRIPEDAUIGCTBHBRIITNGURCNUMULMUNMTRBNDAUCPFDNYTONRCNUMDIERCCKOGKUSOUINGCTBHK"

dic1 = {}
dic2 = {}
dic3 = {}


for i in range(65,91):
    if str.count(chr(i)) > 19:
        dic1[chr(i)] = str.count(chr(i))

d1 = sorted(dic1.items(), key=operator.itemgetter(1), reverse=True)
# print(d1)

# [('U', 82), ('N', 70), ('R', 62), ('T', 48), ('M', 44), ('D', 43), ('I', 43), ('B', 40), ('K', 37), ('C', 36), ('Y', 29), ('L', 23)]

print("\n")

for i in range(65, 91):
    for j in range(65, 91):
        if str.count(chr(i)+chr(j)) > 9:
            dic2[chr(i)+chr(j)] = str.count(chr(i)+chr(j))

d2 = sorted(dic2.items(), key=operator.itemgetter(1), reverse=True)
# print(d2)          

# [('MU', 21), ('DI', 16), ('NY', 16), ('RN', 13), ('CT', 12), ('GC', 12), ('UL', 12), ('YU', 12), 
# ('BH', 11), ('KN', 11), ('NR', 11), ('TB', 11), ('TI', 10), ('UM', 10)]

print("\n")

for i in range(65, 91):
    for j in range(65, 91):
        for k in range(65, 91):
            if str.count(chr(i)+chr(j)+chr(k)) > 4:
                dic3[chr(i)+chr(j)+chr(k)] = str.count(chr(i)+chr(j)+chr(k))

d3 = sorted(dic3.items(), key=operator.itemgetter(1), reverse=True)
# print(d3)

# [('CTB', 11), ('GCT', 11), ('TBH', 11), ('NYU', 10), ('RDI', 6), ('RNR', 6), ('BND', 5), ('BYR', 5), 
# ('DTI', 5), ('IKR', 5), ('LRN', 5), ('NDT', 5), ('UIN', 5)]

str = str.replace('A', 'v')
str = str.replace('B', 'c')
str = str.replace('C', 'l')
str = str.replace('D', 'i')
str = str.replace('E', 'g')
str = str.replace('F', 'w')
str = str.replace('G', 'b')
str = str.replace('H', 'k')
str = str.replace('I', 'n')
str = str.replace('J', 'x')
str = str.replace('K', 's')
str = str.replace('L', 'd')
str = str.replace('M', 'r')
str = str.replace('N', 't')
str = str.replace('O', 'u')
str = str.replace('P', 'y')
str = str.replace('Q', ' ')
str = str.replace('R', 'a')
str = str.replace('S', 'q')
str = str.replace('T', 'o')
str = str.replace('U', 'e')
str = str.replace('V', ' ')
str = str.replace('W', 'f')
str = str.replace('X', 'm')
str = str.replace('Y', 'h')
str = str.replace('Z', 'p')

print(str)