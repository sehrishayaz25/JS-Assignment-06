//.............................CHAPTER 21-25...............................
//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var fname = prompt("Enter First name: ");
var lname = prompt("Enter last name: ");
var fullname = fname + lname;
alert("Welcome " + fullname);

//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
var input = prompt("Enter your Favourite Mobile Phone Model: ");
var length = input.length;
document.write("My Favourite Mobile Phone is: " + input);
document.write("Length Of String :" + length);

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
var str = "Pakistani";
var n = str.indexOf("n");
document.write("String: " + str);
document.write("Index of 'n': " + n);

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var str = "Hello World";
var n = str.lastindexOf("l");
document.write("String: " + str);
document.write("Index of 'n': " + n);

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var str = "Pakistani";
var thirdchar = str.charAt(3);
document.write("String: " + str);
document.write("Character at index 3: " + thirdchar);

//6. Repeat Q1 using string concat() method.
var str = "Pakistani";
var str1 = str.slice(0, 3);
var str2 = str.charAt(3);
var str3 = str.slice(3);
var res = str1.concat(str2, str3);
document.write(res);

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var text = "Hyderabad";
document.write("City: " + text);
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "Hyder") {
        text = text.slice(0, 1) + "Islam" + text.slice(i + 12);
    }
}
document.write("After Replacemewnt: " + text);

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
//var message = “Ali and Sami are best friends. They play cricket and football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Message: " + message);
var newMessage = message.replace(/and/g, "&");
document.write("Message after replacement: " + newMessage);

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var value = "472";
document.write("Value: " + value);
var result = typeof value;
document.write("Type: " + result);
var value1 = parseInt(value);
document.write("Value: " + value1);
var result1 = typeof value1;
document.write("Type: " + result1);

//10. Write a program that takes user input. Convert and show the input in capital letters.
var str = prompt("Input a String: ");
document.write(str);
str = str.toUpperCase();
document.write(str);

//11. Write a program that takes user input. Convert and show the input in title case.
var text = prompt("Enter some text");
document.write("Users input : " + text)
var captializeStrig = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
var res = text.split(' ').map(captializeStrig);
var capitalizeSentence = res.join(' ');
document.write("<br>Upper case : " + capitalizeSentence)

//12. Write a program that converts the variable num to string. var num = 35.
var num = 35.36;
document.write("Number: " + num);
num = num.toString();
num = num.replace('.', '');
document.write("Result: " + num);

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
//Note: ASCII code of ! is 33 
//ASCII code of , is 44 
//ASCII code of . is 46 
//ASCII code of @ is 64
var username = prompt("Enter user name: ");
if (username.includes("@")||username.includes(".")||username.includes(",")||username.includes("!"));
alert("Please enter a valid user name")
else
alert("Valid user name")

//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
var item =prompt("Welcome to ABC bakery. What do you want to order sir/ma'am ?: ");
var fruits = ["cake", "cake pie", "cookie", "chips", "patties"];
// Check if a value exists in the fruits array
var index =fruits.indexOf(item);
if(fruits.indexOf("cake") !== item)
{
        
    document.write(item + " is present at index " +index +" in our bakery");
}
 else if(fruits.indexOf("cake pie") !== item)
{
    document.write(item + " is present at index " +index +" in our bakery");
}
else if(fruits.indexOf("chips") !== item)
{
    document.write(item + " is present at index " +index +" in our bakery");
}
else if(fruits.indexOf("cookie") !== item)
{
    document.write(item + " is present at index " +index +" in our bakery");
}
else if(fruits.indexOf("patties") !== item)
{
    document.write(item + " is present at index " +index +" in our bakery");
}
 else{
   alert("we are soory")
}

//15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// Declare variables and constants
var username;           // username entered by user
var charAny;            // text character identified in username
var anyNum = false;     // digit variable used to detect whether the username has one or not
var index;              // index loop variable
var BR = "<br />";      //break
var ES = "";            //space

// Display program requirements for the username requested
document.write("We'll begin helping you select a username" + BR);
document.write("Your username must have at least 8 characters," + BR);
document.write("   start with a letter, and contain at least 1 numeric character." + BR);
username = prompt("Please enter your username: ", ES);

// Check for length of username
while (username.length < 8) {
    document.write("Your username must be at least 8 characters long." + BR);
    username = prompt("Please enter your username: ", ES);
}

// Check that first character is a letter
// Substring function has three arguments: string, starting position, and ending position
charAny = username.substr(0, 1);
while (charAny !== isLetter()) {
    document.write("The first character of your username must be a letter." + BR);
    username = prompt("Please enter your username: ", ES);
}

// Check that there's at least one digit in the username
while (anyNum !== false) {
    // Check each character, set anyNum to true if a digit
    for (index = 1; index < username.substr(index, index); index++) {
        anyNum = username.substr(index, index);
        if (isNumeric(charAny)) {
            anyNum = true;
        }
    }

    // If anyNum is false there were no numerics
    if (anyNum !== true) {
        document.write("Your username must include at least 1 digit." + BR);
        username = prompt("Please enter your username: ", ES);
    }
}

// Thank the user and end the program
document.write("Thank you! Your new username is: " + username);

//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
var str = "University of Karachi";
var array = str.split('');
document.write(array + <br>)
str1= str.charAt(str.length-1);
document.write(array[i] + </br>)

//17. Write a program to display the last character of a user input.
var str = prompt("User input: ");
str1= str.charAt(str.length-1);
document.write("Last character of input is: " + str1)

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
var str="You have a string “The quick brown fox jumps over the lazy dog";
document.write("Text : " +str)
var count = (str.match(/The/g) || []).length;
var count1= (str.match(/The/g) || []).length;
count2=count+count1;
document.write("\n nThere are "+count2 +"occurrences of word “the”")