import numpy as np
import matplotlib.pyplot as plt

# Get user input for image size and resolution
width = int(input("Enter the width of the image: "))
height = int(input("Enter the height of the image: "))
xmin = float(input("Enter the minimum x-coordinate: "))
xmax = float(input("Enter the maximum x-coordinate: "))
ymin = float(input("Enter the minimum y-coordinate: "))
ymax = float(input("Enter the maximum y-coordinate: "))
max_iter = int(input("Enter the maximum number of iterations: "))

# Create an empty image with the specified resolution
img = np.zeros((width, height))

# Generate the image pixel by pixel
for x in range(width):
    for y in range(height):
        zx, zy = x * (xmax - xmin) / (width - 1) + xmin, y * (ymax - ymin) / (height - 1) + ymin
        c = zx + zy * 1j
        z = c
        for i in range(max_iter):
            if abs(z) > 2.0:
                break
            z = z * z + c
        img[x, y] = i  # Color the pixel based on the number of iterations

# Display the image
plt.imshow(img, extent=(xmin, xmax, ymin, ymax))
plt.show()