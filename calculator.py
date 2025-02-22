print("Calculator")

a, operator, b = input("Enter expression :  ")
a = int(a)
b = int(b)

if operator=="+":
    print(f" \t {a}+{b} = {a+b}")
elif operator=="-":
    print(f" \t {a}-{b} = {a-b}")
elif operator=="*":
    print(f" \t {a}*{b} = {a*b}")
elif operator=="/":
    print(f" \t {a}/{b} = {a/b}")
elif operator=="%":
    print(f" \t {a}%{b} = {a%b}")    
else:
    print("Enter Correct operator")            
input()
