def filter_strings_starting_with_a(input_list):
    return [string for string in input_list if string.startswith('a')]

input_list = ["apple", "banana", "apricot", "pear", "avocado"]
filtered_list = filter_strings_starting_with_a(input_list)
print(filtered_list)