def sum_digits(n):
    result = 0  
    while n > 0:  
        last_digit = n % 10  
        result += last_digit  
        n = n // 10 
    return result

print(sum_digits(123))


# N2

def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    lst.remove(max1)
    max2 = max(lst)

    return max1 + max2

print(sum_two_largest([10, 10, 3, 9, 5])) 