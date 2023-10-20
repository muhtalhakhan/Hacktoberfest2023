import pygame

def play_music(file_path):
    pygame.mixer.init()
    pygame.mixer.music.load(file_path)
    pygame.mixer.music.play()

def stop_music():
    pygame.mixer.music.stop()

def main():
    print("Simple Music Player\n")
    
    while True:
        print("Options:")
        print("1. Play music")
        print("2. Stop music")
        print("3. Quit")
        choice = input("Select an option (1/2/3): ")

        if choice == "1":
            file_path = input("Enter the path to the audio file (e.g., song.mp3): ")
            play_music(file_path)
        elif choice == "2":
            stop_music()
        elif choice == "3":
            break
        else:
            print("Invalid choice. Please select a valid option.\n")

if __name__ == "__main__":
    main()
