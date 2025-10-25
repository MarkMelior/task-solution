def f(x):
    L = 0
    M = 0
    while x > 0:
        L += 1
        if x % 2 == 1:
            M = M + x % 10
        x = x // 10
    return L, M




# СНАЧАЛА ПЕЧАТАЕТ 3, А ЗАТЕМ 8. НАЙТИ НАИМЕНЬШЕЕ
# x = 1
# while f(x) != (3,8):
#     x += 1
# print(x)

# НАИБОЛЬШЕЕ ЧИСЛО x
# ПРИ ВВОДЕ АЛГОРИТМ ПЕЧАТАЕТ 82
x = 1
while True:
    if f(x) == 82:
        print(x)
    x += 1