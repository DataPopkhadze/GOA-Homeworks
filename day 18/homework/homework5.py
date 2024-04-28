def average_of_list(numbers):
    if len(numbers) == 0:
        return 0
    else:
        return sum(numbers) / len(numbers)


numbers_list = [2, 4, 6, 8, 10]


average = average_of_list(numbers_list)
print("სია შედეგად მოიცავს საშუალო არითმეტიკულს:", average)
