def max_multiple(divisor, bound):
    if bound % divisor == 0:
        return bound
    
    multiples = []
    
    for char in range(divisor, bound):
        if char % divisor == 0:
            multiples.append(char)
            
    return max(multiples)
            
print(max_multiple(2, 9))