def reverse_word(word):
    reversed_word = word[::-1]
    return reversed_word


input_word = input("შეიყვანეთ სიტყვა: ")

reversed_result = reverse_word(input_word)
print("შედეგი:", reversed_result)
