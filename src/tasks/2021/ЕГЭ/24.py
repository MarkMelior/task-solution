from collections import Counter

file = open('24.txt')
lines = file.readlines()

s = 'A' * 10000
for line in lines:
    if line.count('A') < s.count('A'):
        s = line

print( Counter(s).most_common() )