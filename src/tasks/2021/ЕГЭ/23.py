def f( start, x ):
    if x < start:
        return 0
    if x == start:
        return 1

    if x == 59: #не проходит через число
        return 0

    k = f( start, x - 2 ) # инверсия условия

    if x % 2 == 0: # если умножение в инверсии
        k += f( start, x // 2 )

    return k

print( f( 1, 14 ) * f( 14, 30 ) ) #обязательно проходит через число