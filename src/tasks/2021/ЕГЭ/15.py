#70 18 42


def dell( n, m ):
    return n % m == 0

A = 1
while True:
    found = False
    for x in range(1, 52920):
        if not( dell( 70, A ) and  ( (not dell(x, A)) <= (dell(x, 18) <= (not dell(x, 42)) ))):
            found = True
            break
    if not found:
        print(A)
    A += 1
