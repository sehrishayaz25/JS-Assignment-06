//.............................CHAPTER 26-30...............................

//1. Write a program that takes a positive integer from user & display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

number =+prompt("Enter positive integer:")
if (number<=0){
alert("not a positive number")
}
else{
document.write("number =" +number)
}
var roundOffValue = Math.round(number)
document.write("<br>Round off value = " +roundOffValue)
var floorValue = Math.floor(number)
document.write("<br>Floor value of number =" +floorValue)
var ceilValue =Math.ceil(number)
document.write("<br>Ceil value of number = " +number)

//2. Write a program that takes a negative floating point number from user & display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

var number =+prompt("Enter a negative floating point integer:")
if (number>=0){
alert("not a negative floating point number")
}
else{
document.write("number =" +number)
}
var roundOffValue = Math.round(number)
document.write("<br>Round off value = " +roundOffValue)
var floorValue = Math.floor(number)
document.write("<br>Floor value of number =" +floorValue)
var ceilValue =Math.ceil(number)
document.write("<br>Ceil value of number = " +number)

//3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num =+prompt("Enter positive or negative number")
var absoluteValue =Math.abs(num)
document.write("Absolute value of" +num +"=" +absoluteValue)

//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

var diceRoll1 = Math.floor( Math.random() * 6 ) +1;
document.write('Random dice value : ' + diceRoll1);
var diceRoll2 = Math.floor( Math.random() * 6 ) +1;
document.write('<br>Random dice value : ' + diceRoll2);

//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var heads = 0;
var tails = 0;
if (Math.random() < 0.5){
    document.write("2<br> Random coin value:Heads")
}else{
    document.write("1<br> Random coin value: Tails")
}

//6. Write a program that shows a random number between 1 and 100 in your browser.

var number = Math.floor(Math.random() * 100);
document.write("Random number between 1 and 100 : " +number)

//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weight = prompt("Enter your weight in Kilograms")
document.write("The weight of users is "+weight)

//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input 
//equals the secret number, congratulate the user.

var secretNum=Math.floor(Math.random()*10)
var number =+prompt("Enter a number between 1 and 10")
if (number===secretNum){
    alert("Congratulation you won!")
}
else{
    alert("Try again!")
}