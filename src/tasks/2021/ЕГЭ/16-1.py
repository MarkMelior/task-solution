def F(n):
    global cnt
    cnt += 1
    if n < 5:
        cnt += 1
        F(n+1)
        F(n+2)
        cnt += 1

cnt = 0
F(2)
print(cnt)
