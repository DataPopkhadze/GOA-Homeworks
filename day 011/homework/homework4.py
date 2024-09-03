user_num = int(input("enter a number: "))
if user_num % 2 == 0:
    user_num /= 2 
    print(user_num)
else:
    user_num = user_num * 3  + 1
    print(user_num)