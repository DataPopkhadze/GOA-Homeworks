def process_numbers(start, end):
    numbers_list = []
    for num in range(start, end + 1):
        numbers_list.append(num)
    filtered_list = []
    for num in numbers_list:
        if num % 2 == 0:
            filtered_list.append(num * 2)
        else:
            filtered_list.append(num ** 2 * 0.5)
    return filtered_list


start_number = int(input("შემოიტანეთ საწყისი რიცხვი: "))
end_number = int(input("შემოიტანეთ საბოლოო რიცხვი: "))


result_list = process_numbers(start_number, end_number)
print(result_list)
