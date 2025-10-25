def calc(x, a, b):
    x = int(str(x), a)
    s = ''
    while x > 0:
        s += str(x % b)
        x //= b
    return s[::-1]

print( calc( 24, 10, 8 ) )

# x = 6113281245
# s = ''
# while x > 0:
#     s += str(x % 5)
#     x //= 5
#
# print(s.count('4'))