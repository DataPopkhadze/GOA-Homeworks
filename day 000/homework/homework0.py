from turtle import *


#we want to draw a house

#step 1 draw a square
speed(5)
width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of drawing a square

#drawing a door
begin_fill()
forward(70)
color("yellow")
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()
#end of drawing a door

#drawing first window
begin_fill()
penup()
goto(170 , 130)
pendown()
color("brown")
right(90)
forward(35)
right(90)
forward(40)
right(90)
forward(35)
right(90)
forward(40)
end_fill()

#end of drawing first window


#drawing second window

begin_fill()
penup()
goto(68 , 130)
pendown()
right(90)
forward(35)
right(90)
forward(40)
right(90)
forward(35)
right(90)
forward(40)
end_fill()

#end of drawing second window

#drawing a roof

color("red")
penup()
goto(200 , 200)
pendown()
begin_fill()
right(150)
forward(170)
left(110)
forward(190)
end_fill()

#end of drawing a roof



exitonclick()