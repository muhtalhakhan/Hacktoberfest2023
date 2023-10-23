def sum():
      return int(x)+int(y)

def sub():
      return int(x)-int(y)

def multiply():
      return int(x)*int(y)

def divide():
      return int(x)/int(y)


x = input("Enter 1st Number: ")
y = input("Enter 2nd Number: ")


o = input("What do you want to perform(1-Add/2-Sub/3-Multiply/4-Divide): ")

if int(o) == 1:
    print(sum())
elif int(o) == 2:
    print(sub())
elif int(o) == 3:
    print(multiply())
elif int(o) == 4:
    print(divide())
