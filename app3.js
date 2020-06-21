// // //..............................CHAPTER#35 to 38                                                                                                                                                                                         / / 1. Write a function that displays current date & time in your
// // 1.Write a function that displays current date & time in your browser..
// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


// // 2. Write a function that takes first & last name and then it greets the user using his full name.
// function MyFunction() {
//     var first, second;
//     first = document.getElementById("firstname").value;
//     second = document.getElementById("lastname").value;

//     document.GetElementById("here").InnerHTML = first;
//     document.GetElementById("here").InnerHTML = second;
// }
// // 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function addNumbers() {
//     var val1 = parseInt(document.getElementById("value1").value);
//     var val2 = parseInt(document.getElementById("value2").value);
//     var ansD = document.getElementById("answer");
//     ansD.value = val1 + val2;
// }


// // 5. Write a function that squares its argument.
// function sumOfSquares(num) {
//     var i;

//     for (i = 0; i <= num; i++) {
//         var sum = 0;
//         var i = i * i;
//         sum = i;
//     }
//     document.write("The sum of squares for numbers up to and including " + num + "is " + sum);
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);


// // 6. Write a function that computes factorial of a number.
// var up = document.getElementById('GFG_UP');
// var down = document.getElementById('GFG_DOWN');
// var n = 5;

// up.innerHTML = "Click on the button to calculate"
//     + " the factorial of n.<br>n = " + n;

// function Factorial(n) {
//     var ans = 1;

//     for (var i = 2; i <= n; i++)
//         ans = ans * i;
//     return ans;
// }

// function GFG_Fun() {
//     down.innerHTML = Factorial(n);
// }

// 7. Write a function that take start and end number as inputs & display counting in your browser.
// function sum() {
//     var FirstNumber = parseInt(prompt("Enter first number:"));
//     var SecondNumber = parseInt(prompt("Enter second number:"));

//     var result = 0;

//     for (var i = FirstNumber; i <= SecondNumber; i++) {
//         result += i;
//     }

//     alert(result);
// }


//chp35 - 38
//1. Write a function that displays current date & time in your browser.
function nowdate() {

    var d = new Date()
    var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    return days[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " GMT+0500 (PKT)"
}
document.write(nowdate())

//2. Write a function that takes first & last name and then it greets the user using his full name.
function name(fName, lName) {
    return "Welcome " + fName + lName

}
var firstName = prompt("Enter firstname")
var lastName = prompt("Enter lastname")
document.write(name(firstName, lastName))

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function add(num1, num2) {
    Inum1 = parseInt(num1)
    Inum2 = parseInt(num2)
    return Inum1 + Inum2
}
var numb1 = prompt("Enter number1")
var numb2 = prompt("Enter number2")
document.write(add(numb1, numb2))

//4. Calculator:
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
//show the desired result in your browser.
function add(num1, num2) {

    Inum1 = parseInt(num1)
    Inum2 = parseInt(num2)
    return Inum1 + Inum2
}
function sub(num1, num2) {

    Inum1 = parseInt(num1)
    Inum2 = parseInt(num2)
    return Inum1 - Inum2
}
function mul(num1, num2) {

    Inum1 = parseInt(num1)
    Inum2 = parseInt(num2)
    return Inum1 * Inum2
}
function div(num1, num2) {

    Inum1 = parseInt(num1)
    Inum2 = parseInt(num2)
    return Inum1 / Inum2
}

var numb1 = prompt("Enter number1")
var op = prompt("Enter Operator")
var numb2 = prompt("Enter number2")

if (op == "+") {

    document.write(add(numb1, numb2))
} else if (op == "-") {

    document.write(sub(numb1, numb2))
} else if (op == "*") {

    document.write(mul(numb1, numb2))
} else if (op == "/") {

    document.write(div(numb1, numb2))
}

//5. Write a function that squares its argument.
function sqrt(num1) {

    Inum1 = parseInt(num1)
    return Inum1 * Inum1
}
var numb1 = prompt("Enter number1")
document.write(sqrt(numb1))

//6. Write a function that computes factorial of a number.
function factorial(num) {

    if (num <= 1) {

        return 1
    }
    else {
        temp = num
        var fct = 1
        for (i = 0; i < num; i++) {

            fct = fct * temp
            temp--
        }
        return fct
    }
}
num = prompt("enter num")
numI = parseInt(num)

document.write(factorial(numI))

//7. Write a function that take start and end number as inputs & display counting in your browser.
function count(num1, num2) {

    var numb = []
    temp = num1
    for (i = 0; i < num2 - temp; i++) {
        numb[i] = num1 + 1
        num1++
    }
    return numb
}
var start = prompt("Enter start num")
var end = prompt("Enter end num")
startI = parseInt(start)
endI = parseInt(end)
document.writeln(count(startI, endI))

//8. Write a nested function that computes hypotenuse of a right angle triangle.
//Hypotenuse2 = Base2 + Perpendicular2 
//Take base and perpendicular as inputs.
//Outer function : calculateHypotenuse()
//Inner function: calculateSquare()
function sq(num1) {

    Inum1 = parseInt(num1)
    return Inum1 * Inum1
}
function hyp(num1, num2) {

    return Math.sqrt(sq(num1) + sq(num2))
}

num = prompt("enter base")
numI = parseInt(num)

num1 = prompt("enter perp")
num1I = parseInt(num1)

document.write(hyp(numI, num1I))

//9. Write a function that calculates the area of a rectangle.
//A = width * height
//Pass width and height in following manner:
//i. Arguments as value
//ii. Arguments as variables
function rectA(height, width) {
    return height * width
}
var height = prompt("Enter Height")
var width = prompt("Enter width ")

document.write(rectA(height, width))


//10. Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as
//forward, e.g., madam.
var wordR = ""
var ln = prompt("Enter to check palindrome")
var tempWord = ln.split("");


for (i = tempWord.length - 1; i >= 0; i--) {

    wordR = wordR + tempWord[i]
}
if (ln == wordR) {
    document.write("word is a palindrome")
} else {
    document.write("word isn't a palindrome")
}

//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//EXAMPLE STRING : 'the quick brown fox'
//EXPECTED OUTPUT : 'The Quick Brown Fox'
function small(inp) {

    var inpSmall = inp.toLowerCase()
    var chrCap = inpSmall.charAt(0)
    chrCap = chrCap.toUpperCase()
    var sep = inpSmall.split("")
    sep[0] = chrCap
    inpSmall = sep.join("")
    return inpSmall

}

//12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//EXAMPLE STRING : 'Web Development Tutorial'
//EXPECTED OUTPUT : 'Development'
function Capsent(inp) {

    var propSent = ""
    var inpSmall = inp.toLowerCase()
    var sp = inpSmall.split(" ")

    for (i = 0; i < sp.length; i++) {

        propSent = propSent + small(sp[i]) + " "
    }
    return propSent
}

var inp = prompt("Enter ")
document.write(Capsent(inp))

//13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
//Sample arguments : 'JSResourceS.com', 'o'
function Long(sent) {
    var strSp = sent.split(' ')
    var longestWord = 0
    for (var i = 0; i < strSp.length; i++) {
        if (strSp[i].length > longestWord) {
            longestWord = strSp[i].length
            num = i
        }
    }
    return strSp[num]
}

var sen = prompt("Enter Sentence")
document.write(Long(sen))

//14. The Geometrizer
function chec(sent, chr) {
    var strSp = sent.split('');
    num = 0
    for (var i = 0; i < strSp.length; i++) {
        if (strSp[i] == chr) {
            num = num + 1
        }
    }
    return num
}

var sen = prompt("Enter Sentence")
var ch = prompt("Enter character")
document.write(chec(sen, ch))
function calcCircumference(radius) {
    return "The circumference is" + (2 * 3.14 * radius)
}
function calcCircumference(radius) {
    return "The area is" + (3.14 * radius * radius)
}