import itertools as w

a = list( w.product('ABCX', repeat = 5) )



for x in a:
    print(''.join(x) )
