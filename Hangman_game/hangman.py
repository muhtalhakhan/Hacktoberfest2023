import random
import re
def get_word():
    words = ['bank','lobby','triad','symphony','trampoline','insomnia','fiction','elvis','proctured','genesis','noah']
    x = random.choice(words)
    return x.upper()


print("Hey!! Let's play Hangman!!")
print("Here's the stream of spaces you gotta fill! Good Luck!")
print("Remember you have only 6 chances to get it right!")
word = get_word()
n = len(word)
chances = 6
for i in range(0,n):
    print(" _ ",end = '')
print()
print("The length of the word to be reckoned is: {}".format(n))
print()
list_ans = []
x = 0
val = 0
for j in range(0,chances):
    print()
    print("Remaining chances: {}".format(chances))
    choice = input("Enter only one character:")[0]
    choice = choice.upper()
    if not choice.isalpha():
        print("Hey! Enter a character")
        chances -= 1
    elif choice in list_ans:
        print("Hey! You already chose this letter!")
        chances -= 1
    elif choice in word and choice not in list_ans:
        print("Hey! Good guess!!")
        chances += 2
        count = word.count(choice)
        val = val + count
        for i in word:
            if i == choice:
                list_ans.append(i)
        print()
        for i in word:
            if i in list_ans:
                print("{}".format(i),end='')
            else:
                print("_",end='')
    else:
        print("Wrong guess fella!")
        for i in word:
            if i in list_ans:
                print("{}".format(i),end='')
            else:
                print("_",end='')
        chances -= 1

    if val == n:
        x = 1
        break
print()
if x == 1:
    print("Yayy! You got the word right:)")
else:
    print("Hey! I'm afraid you are out of your chances:(")
    print("The word which was to be reckoned was: {}".format(word))
