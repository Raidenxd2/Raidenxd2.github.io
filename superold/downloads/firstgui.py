import tkinter as tk

win = tk.Tk()

win.title("GUI")

tk.Label(win, text="LOL").pack()
tk.Button(win, text="pressme").pack()
 
win.mainloop()