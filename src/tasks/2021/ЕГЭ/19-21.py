# +1 +5 *3
# >= 42 [игра завершится]
# S or F, S [количество куч]
# 1 <= S <= 41 [Y]

from functools import lru_cache

def moves(h):
    a = h # a, b
    return ( a + 1 ), ( a * 3 ), ( a + 5 ) # (a + x, b), (a, b + x)

@lru_cache(None)
def game(h):
    if h >= 42: # h = sum(h)
        return 'W'
    if any(game(m) == 'W' for m in moves(h)):
        return 'P1'
    if all(game(m) == 'P1' for m in moves(h)): # any если неудачный ход Пети
        return 'B1'
    if any(game(m) == 'B1' for m in moves(h)):
        return 'P2'
    if all(game(m) == 'P1' or game(m) == 'P2' for m in moves(h)):
        return 'B2'

for s in range(1, 42): # Y + 1
    if game(s) is not None: # s = (F, s)
        print(s, game(s)) # s = (F, s)
