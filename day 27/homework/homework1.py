# 1
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]

# 2

def friend(names_list):
    friends = []
    
    for name in names_list:
        if len(name) == 4:
            friends.append(name)
    
    return friends

# 3

def find_short(s):
    words_list = s.split(" ")
    
    length_list = []
    
    for word in words_list:
        length_list.append(len(word))
    
    return min(length_list)

# 4

def get_middle(s):
    word_length = len(s)
    index = word_length // 2
    
    if word_length % 2 == 0:
        return s[index - 1] + s[index]
    
    return s[index]

# 5

def high_and_low(numbers):
    strings_list = numbers.split(" ")
    numbers_list = []
    
    for number in strings_list:
        numbers_list.append(int(number))
    
    print(numbers_list)
    
    return str(max(numbers_list)) + " " + str(min(numbers_list))

# 6

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

def goose_filter(birds):
    filtered_list = []
    
    for bird in birds:
        if bird not in geese:
            filtered_list.append(bird)
    
    return filtered_list


print(goose_filter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))