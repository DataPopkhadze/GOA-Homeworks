def add_to_list(first_name, last_name):
    user_info = [first_name, last_name]
    return user_info


input_first_name = input("შემოიტანეთ სახელი: ")
input_last_name = input("შემოიტანეთ გვარი: ")


user_info_list = add_to_list(input_first_name, input_last_name)
print(user_info_list)
