def filter_numbers():
    numbers_list = list(range(1, 21))
    filtered_list = []
    for num in numbers_list:
        if num % 4 == 0:
            filtered_list.append(num)
    return filtered_list

filtered_list = filter_numbers()
print(filtered_list)
