print("Hello welcome the Rec Room quiz!")
print("NOTE: YOUR ANSWERS MUST BE IN LOWERCASE!!!")

ans = input("Do you want to play? (yes/no): ")
score = 0
total_q = 4

if ans.lower() == "yes":
    ans = input("1. Can you make rooms, see events and create events as a junor acount? ")
    if ans.lower() == "no":
        score += 1
        print("Right!")
    else:
        print("Wrong")


    ans = input("2. Is this game made with unity? ")
    if ans == "yes":
        score += 1
        print("Right!")
    else:
        print("Wrong")

    ans = input("3. When was rec room made? ")
    if ans == "2016":
        score += 2
        print("Right!")
    else:
        print("Wrong")

    ans = input("4. When was meetups added? ")
    if ans == "2020":
         score += 0.56
         print("Right!")
    else:
        print("Wrong")

    ans = input("5. Can you customaze your dorm room? ")
    if ans == "yes":
        score += 0.86
        print("Correct!")
    else:
        print("Wrong that was so easy and YOU GOT IT WRONG...")

print("Your score:")
print(score)