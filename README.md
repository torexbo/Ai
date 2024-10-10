# Python Calculator and Odd Number Finder

This repository contains a simple Python script that performs two tasks:

1. **Basic Calculator**: Allows the user to perform addition, subtraction, multiplication, division, and modulus operations.
2. **Odd Number Finder**: Prints out all odd numbers between 11 and 49.

## Code Example

Here's the script included in this repository:

```python
# Simple Calculator
x2 = int(input("Enter The First Number : "))
x3 = int(input("Enter The Second Number : "))
x_opr = str(input("Operator Methods (+,-,*,/,%) : "))

if x_opr == "+":
    print("The Result Is", x2 + x3)
elif x_opr == "-":
    print("The Result Is", x2 - x3)
elif x_opr == "*":
    print("The Result Is", x2 * x3)
elif x_opr == "/":
    print("The Result Is", x2 / x3)
elif x_opr == "%":
    print("The Result Is", x2 % x3)
else:
    print("You May Make Some Mistake I Think You Should Try Again ✔️")
```
# Odd Number Finder
i = 11
while i < 50:
    print(i)
    i = i + 2
