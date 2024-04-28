user_name = input("enter your name /or/ quit: ")
i = 1 
while user_name != "quit":
    print("if you want to quit, type 'quit' in terminal, i said it", i, "times already")
    user_name = input("enter your name /or/ quit: ")
    i += 1
    if i == 3:
        print("metjer agar getyvi, sami kaci rom getyvis chainiki xaro, yurebidan ortqli unda gaushva")