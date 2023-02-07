let date = new Date();

let hour = date.getHours();
console.log("hour is " + hour);
                    
if (hour < 12){
    document.write("Good morning ");
}
else if (hour >= 12 && hour <= 17){
    document.write("Good afternoon ");
}
else if (hour >17 && hour < 21){
    document.write("Good evening ");
}
else {
    document.write("Good night ");
}

let username = prompt(`Welcome! What is your name?`)
document.write(username + " 🖐");