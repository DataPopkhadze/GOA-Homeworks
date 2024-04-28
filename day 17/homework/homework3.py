def filter_even_numbers(input_list):
    even_numbers = []
    for num in input_list:
        if num % 2 == 0:
            even_numbers.append(num)
    return even_numbers

input_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers_list = filter_even_numbers(input_list)
print(even_numbers_list)
