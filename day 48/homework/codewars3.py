def check_exam(arr1,arr2):
    score = 0
    
    for index in range(len(arr1)):
        if arr1[index] == arr2[index]:
            score = score + 4
        elif arr2[index] == "":
            score = score + 0 
        else:
            score = score - 1
            
    if score < 0:
        return 0
    else:
        return score