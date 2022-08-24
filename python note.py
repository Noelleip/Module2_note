# Only input(), outcome will default as string

num1= float(input("Please input 1st no.: "))
num2= float(input("Please input 2nd no.: "))
op = input("Please input an operator: ")

if op=="+":
    print(num1+num2)
elif op=="-":
    print(num1-num2)
elif op=="*":
    print(num1*num2)
elif op=="/":
    print(num1/num2)
else:
    print("Do not support")