//1. Write a program that displays current date and time in your browser.
function formatAMPM();
{
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
document.getElementById("para1").innerHTML = formatAMPM();

//2. Write a program that alerts the current month in words.For example December.
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const d = new Date();
document.write("current month" + monthNames[d.getMonth()]);

//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var now = new Date();        // current date/time
var hrs = now.getHours();    // 0 to 23
var mins = now.getMinutes();
var secs = now.getSeconds();


var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[now.getDay()];
document.writeln("<p>Today is " + day + "</p>");

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var rightNow = new Date();
var theDay = rightNow.getDay();
if (theDay=="Sat"||theDay=="Sun")
alert("It's Fun Day")
else alert("It's not Fun Day")

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month
//else shows “Last days of the month”.
var d = new Date();
var n = d.getUTCDate();
if (n <= 15) {
    document.write("First fifteen days of the month")
}
else {
    document.write("Last days of the month")
}

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
//hasn't been declared beforehand. Use any variable you like to represent the Date object.
var now = new Date();
document.write("Current Date : " + now);
var d = new Date();
var n = d.getTime();
document.write("<br>Elapsed milliseconds since January 1,1970 : " + n);
var minutes = n / 60000;
document.write("<br>Elapsed minutes since January 1,1970 : " + minutes);

//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var d = new Date();
var n = d.getUTCHours();
var m = d.getUTCMinutes();
var s = d.getUTCSeconds();
if (n <= 12 && m == 00 && s == 00) {
    alert("It's AM")
}
else {
    alert("It's PM");
}

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
var d = new Date();
d.setDate(0);
var laterDate=d;
document.write("LaterDate : " +laterDate);

//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//Note: 1st Ramadan was on June 18, 2015
// To set two dates to two variables 
var date1 = new Date("05/18/2015"); 
var date2 = new Date(); 
  
// To calculate the time difference of two dates 
var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
//To display the final no. of days (result) 
document.write(Difference_In_Days+"Days have passed since 1st Ramadan, 2015");

//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
var now1 = new Date("Jan/01/2015 01:00:00");
 var now2 =new Date();
 var Difference_In_Time = now2.getTime() - now1.getTime()/1000;
 document.write("On reference date "+now2 +", " +Difference_In_Time +" seconds has passed since beginning of 2015");

//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
//finally display the date object in your browser.
var d = new Date();
document.write("Current Date: "+d);
var currHour = d.getHours();
var resetHour = d.setHours(currHour - 1);
document.write("1 hour ago, It was: "+resetHour);

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var d = new Date();
document.write("Current Date: "+d);
var currYear = d.getFullYear();
var resetYear = d.setFullYear(1920);
document.write("100 years back, It was: "+resetYear);

//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var dob = prompt("Enter Your Date of Birth","Jan 25.1999")
var dobmill = dob.getTime();
var today = new Date();
var todaymill = today.getTime();
var diff = Math.floor(diff/(1000*60*60*24*30*12))
document.write("Your age is: "+ diff)
d = dob.getFullYear();
document.write("Your birth year is: "+d)

//14. Write a program to generate your K-Electric bill in your
//browser. All the amounts should be rounded off to 2
//decimal places. Display the following fields:
//a. Customer Name
//b. Current Month
//c. Number of units
//d. Charges per unit
//e. Net Amount Payable (within Due Date)
//f. Late Payment Surcharge
//g. Gross Amount Payable (after Due Date)
//Where,Net Amount Payable (within Due Date) = Number of units * Charges per unit
//& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name : <strong>ABC Customer</strong>");
var monthNames = ["jan", "febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var month=now.getMonth();
var nameOfCurrentMonth=monthNames[month];
document.write("<br>Month : " +"<b>"+nameOfCurrentMonth +"</b>");
var units=prompt("Enter Number of units")
var charges=16;
document.write("<br>Number of units : " +"<b>"+units+"</b>" +"<br>Charges per unit : "+"<b>"+charges +"<b/><br>");
var Net_Amount_Payable= units * charges;
document.write("<br>Net Amount Payable (within Due Date) : " +"<b>" +Net_Amount_Payable + "</b>");
var lateCharges =350;
document.write("<br>Late Payment Charges : " +lateCharges);
var Gross_Amount_Payable = Net_Amount_Payable + lateCharges;
document.write("<br>Gross Amount Payable (after Due Date) : "+Gross_Amount_Payable);