# Practice Python
def greet(name):
    return f"Hello, {name}!"
def add(a, b):
    return a + b
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
def is_even(num):
    return num % 2 == 0
def fibonacci(n):
    fib_sequence = [0, 1]
    for i in range(2, n):
        next_fib = fib_sequence[-1] + fib_sequence[-2]
        fib_sequence.append(next_fib)
    return fib_sequence[:n]
def reverse_string(s):
    return s[::-1]
def find_max(lst):
    return max(lst)
def find_min(lst):
    return min(lst)
def square(num):
    return num * num
def cube(num):
    return num * num * num
def is_palindrome(s):
    return s == s[::-1]
def sum_of_list(lst):
    return sum(lst)
