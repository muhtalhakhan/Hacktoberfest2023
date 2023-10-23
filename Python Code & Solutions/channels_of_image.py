import cv2 as cv
import numpy as np 

link = r'C:\Users\suyash\Pictures/Camera Roll/imgop.jpg'
im = cv.imread(link)
img = cv.resize(im, (500,500) ,interpolation=cv.INTER_AREA)
cv.imshow('image', img)

blank = np.zeros(img.shape[:2], dtype='uint8')

b,g,r =cv.split(img)
#cv.imshow('blue', b)
#cv.imshow('green', g)
#cv.imshow('red', r)

print(img.shape)
print(b.shape)
print(g.shape)
print(r.shape)

blue = cv.merge([b, blank, blank])
green = cv.merge([blank, g, blank])
red = cv.merge([blank, blank, r])

cv.imshow('blue', blue)
cv.imshow('green', green)
cv.imshow('red', red)

merged = cv.merge([r,b,g])
cv.imshow('merged image', merged)


cv.waitKey(0)


