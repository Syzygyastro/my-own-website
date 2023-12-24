

def num_to_alpha(num_arr):
    return [chr(x+96).upper() for x in num_arr]

a = [831, 817, 825, 801, 822, 805, 811, 816, 824, 805, 814, 814, 811, 807, 805, 816, 824]

for i in range (30):
    b = [abs(x-(800+i)) for x in a]
    converted_arr = num_to_alpha(b)
    print(''.join(converted_arr))



