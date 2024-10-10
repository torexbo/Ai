
Open In Colab

x2 = int(input("Enter The First Number : "))
x3 = int(input("Enter The Second Number : "))
x_opr = str(input("Operator Methods (+,-,*,/,%) : "))
if x_opr == "+":
    print("The Result Is",x2+x3)
elif x_opr == "-":
    print("The Result Is",x2-x3)
elif x_opr == "*":
    print("The Result Is",x2*x3)
elif x_opr == "/":
    print("The Result Is",x2/x3)
elif x_opr == "%":
    print("The Result Is",x2%x3)
else:
    print("You May Make Some Mistake I Think You Should Try Again ✔️")
     


i = 11
while i < 50:
    print(i)
    i = i + 2
