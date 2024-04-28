def sum_greater_than_10(input_list):
    return sum(num for num in input_list if num > 10)

input_list = [5, 15, 3, 20, 8, 12]
result = sum_greater_than_10(input_list)
print("Sum of numbers greater than 10:", result)
