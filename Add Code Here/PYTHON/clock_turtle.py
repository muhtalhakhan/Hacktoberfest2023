import turtle
import time

screen = turtle.Screen() #turtle screen
screen.bgcolor("black") #background of the screen
screen.setup(width=600, height=600) #geometry of the GUI
screen.title("Ghadi") #title of the GUI
screen.tracer(0) #tracer for the GUI

turtle = turtle.Turtle() #the turtle
turtle.hideturtle() #make the turtle invisible
turtle.speed(0) #setting the speed to 0
turtle.pensize(3) #setting the pensize to 3


def ghadi_bana(hour, minute, second, turtle): #function with 4 parameters

    turtle.up() #not ready to draw
    turtle.goto(0, 210) #positioning the turtle
    turtle.setheading(180) #setting the heading to 180
    turtle.color("red") #setting the color of the pen to red
    turtle.pendown() #starting to draw
    turtle.circle(210) #a circle with the radius 210

    turtle.up() #not ready to draw
    turtle.goto(0, 0) #positioning the turtle
    turtle.setheading(90) #same as seth(90) in newer version

    for z in range(12): #loop 
        turtle.fd(190) #moving forward at 190 units
        turtle.pendown() #starting to draw
        turtle.fd(20) #forward at 20
        turtle.penup() #not ready to draw
        turtle.goto(0, 0) #positioning the turtle
        turtle.rt(30) #right at an angle of 30 degrees

    hands = [("white", 80, 12), ("white", 150, 60), ("white", 110, 60)] #the color and the hands set
    time_set = (hour, minute, second) #setting the time

    for hand in hands: #loop
        time_part = time_set[hands.index(hand)] #time part in the hand index in hands of time_Set
        angle = (time_part/hand[2])*360 #setting the angle for the clock
        turtle.penup() #not ready to draw
        turtle.goto(0, 0) #positioning the turtle
        turtle.color(hand[0]) #setting the color of the hand
        turtle.setheading(90) #same as seth(90)
        turtle.rt(angle) #right at an angle of "right"
        turtle.pendown() #ready to draw
        turtle.fd(hand[1]) #forward at a unit of 1st index of the hand var


while True:
    hour = int(time.strftime("%I")) #setting the hour from the time module
    minute = int(time.strftime("%M")) #setting the minute from the time module
    second = int(time.strftime("%S")) #setting the second as above

    ghadi_bana(hour, minute, second, turtle) #calling the ghanta_bana() function with the given parameters
    screen.update() #updating the scren
    time.sleep(1) #making the code sleep for a second with the time module
    turtle.clear() #clearing the pen
