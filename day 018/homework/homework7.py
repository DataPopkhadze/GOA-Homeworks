def filter_duplicates(numbers):
    filtered_list = []

    for num in numbers:
        if num not in filtered_list:
            filtered_list.append(num)

    return filtered_list
    
numbers_list = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 9, 1, 10]

filtered_numbers = filter_duplicates(numbers_list)
print("გაფილტრული სია:", filtered_numbers)
