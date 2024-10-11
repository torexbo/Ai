[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/your-username/your-repo-name/blob/main/your-notebook.ipynb)
# Python Calculator and Odd Number Finder

This repository contains a simple Python script that performs two tasks:

1. **Basic Calculator**: Allows the user to perform addition, subtraction, multiplication, division, and modulus operations.
2. **Odd Number Finder**: Prints out all odd numbers between 11 and 49.

## Code Example

Here's the script included in Calculator Code Basic Of Simple GUI Python Calculator :

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
The Odd 10 To 50 Code :
```python
# Odd Number Finder
i = 11
while i < 50:
    print(i)
    i = i + 2
