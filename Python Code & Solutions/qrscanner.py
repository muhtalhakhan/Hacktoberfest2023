import qrcode
from pyzbar.pyzbar import decode
from PIL import Image

myqr = qrcode.make("https://www.codeschool.pk/")
myqr.save("myqr.png",scale = 8)


b = decode(Image.open(("myqr.png")))

print(b[0].data.decode("ascii"))


