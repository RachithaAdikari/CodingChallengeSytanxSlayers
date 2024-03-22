import tkinter as tk
from tkinter import messagebox
import random
import string

def generate_password():
    password_length = int(length_entry.get())
    if password_length <= 1:
        messagebox.showerror("Error", "Please enter a longer length")
        return

    include_string = include_string_entry.get()
    exclude_char = exclude_char_entry.get()
    if include_string == " ":
        messagebox.showerror("Error", "Cannot include spaces")
        return


    # only including selected
    password_characters = string.ascii_letters + string.digits + string.punctuation + include_string
    password = ''. join(random.choice(password_characters) for i in range(password_length))
    password_entry.delete (0, tk.END)
    password_entry.insert(0, password)

    # excluding but not including selected
    password_characters = string.ascii_letters + string.digits + string.punctuation + include_string
    password_chars = ''.join(set(password_characters) - set(exclude_char))
    password = ''.join(random.choice(password_chars) for i in range(password_length))
    password_entry.delete(0, tk.END)
    password_entry.insert(0, password)


# Creating main window
root = tk.Tk()
root.title("Random Password Generator")
root.geometry("500x300")
root.config(bg="lightblue")

# Creating widgets
title_label = tk.Label(root, text="Random Password Generator App", font=10, background="lightblue")
title_label.grid(row=0, column=0, padx=10, pady=10)
length_label = tk.Label(root, text = "Password Length: ", background="lightblue")
length_label.grid(row=1, column=0, pady=10)
length_entry = tk.Entry(root)
length_entry.grid(row=1, column=1, pady=10)

include_string_label = tk. Label(root, text="Select character to include  ", background="lightblue")
include_string_label.grid(row=2, column=0, padx=10, pady=10)
include_string_entry = tk.Entry(root)
include_string_entry.grid(row=2, column=1, padx=10, pady=10)

exclude_char_label = tk. Label(root, text="Select character to exclude  ", background="lightblue")
exclude_char_label.grid(row=3, column=0, padx=10, pady=10)
exclude_char_entry = tk.Entry(root)
exclude_char_entry.grid(row=3, column=1, padx=10, pady=10)

generate_button = tk.Button(root, text="Generate Password", command=generate_password)
generate_button.grid(row=4, columnspan=2, padx=10, pady=5)

password_entry = tk.Entry(root, width=30)
password_entry.grid(row=5, columnspan=2, padx=10, pady=5)

# Running the main loop
root.mainloop()
