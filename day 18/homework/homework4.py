def process_name(last_name):
    name_list = list(last_name)
    new_list = []
    for idx, char in enumerate(name_list):
        if idx % 2 == 0:
            new_list.append(char)
    return ''.join(new_list)


input_last_name = input("შეიყვანეთ გვარი: ")

result_string = process_name(input_last_name)
print(result_string)
