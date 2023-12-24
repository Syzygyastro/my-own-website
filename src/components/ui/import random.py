import random

def dice_simulation(throws, trials):
    total_throws = []
    for _ in range(trials):
        Sum = 0
        for t in range(throws):
            Sum += random.randint(1, 6)  # adding a random value from dice throw
            if Sum % 6 == 0:  # check if the sum is a multiple of 6
                total_throws.append(t + 1)  # add number of throws to reach multiple of 6
                break  # exit loop once condition is satisfied
    print(sum(total_throws))
    return sum((total_throws)) / len(total_throws) # calculating average

dice_simulation(10, 10000)
