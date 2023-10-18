#Name:Maneesha
#Work:  A Code in python 

# Prompt the user for their name
name = input("Enter your name: ")

# Prompt the user for their workplace or learning institution
workplace = input("Enter your workplace or learning institution: ")

# Create a file named "hacktoberfest.py" and write the user's information to it
with open("hacktoberfest.py", "w") as file:
    file.write(f"# Your name: {name}\n")
    file.write(f"# Your work or learning place: {workplace}\n")
    # You can add more code or content here if needed

print("Information saved to 'hacktoberfest.py'.")


