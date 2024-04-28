def manual_min(lst):
    min_val = float('inf')
    for num in lst:
        if num < min_val:
            min_val = num
    return min_val
