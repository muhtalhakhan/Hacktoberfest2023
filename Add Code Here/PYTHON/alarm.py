from tkinter import *
import datetime
import time
import winsound

hour = datetime.datetime.hour
minute = datetime.datetime.minute
second = datetime.datetime.second

def alarm():
    while True:
        set_alarm = f"{hour}:{minute}:{second}"
        
        time.sleep(1)

        current_time = datetime.datetime.now().strftime("%H:%M:%S")

        if current_time == set_alarm:
            print("Time To Wake Up...")
            winsound.PlaySound("sound.wav", winsound.SND_ASYNC)

alarm()
