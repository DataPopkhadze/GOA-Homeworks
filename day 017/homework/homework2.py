def filter_strings_by_length(input_list):
    new_list = []
    for item in input_list:
        if len(item) > 5:
            new_list.append(item)
    return new_list

input_list = ["string", "luka", "data", "tatuli", "nensi"]
filtered_list = filter_strings_by_length(input_list)
print(filtered_list)