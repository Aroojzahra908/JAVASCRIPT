/*var y = parseInt(prompt("Please enter a number"));
var x = "*";

for (var a=1; a<=y; a++) {
    console.log(x);
    x += " *";
}
*/

/*
// ALSO use different datatypes (mix array)
var food = ["Pizza","Burger","Sandwitch"]; 
var food2 = new Array("Pizza","Burger","Sandwitch");

var a = food[0];
var b = food[1]; 

alert(a); 
alert(b); 
alert(food2[2]);
*/

/*
var a=[1,2,3];
var b=[true, false ];
var c=[true,1,'b'];
var d=[{color:'black'}, {city:'fsd'}];
console.log(a[0]);
console.log(b[1]);
console.log(c[0]);
console.log(d[1]);
console.log(a)
console.log(a[3]);   //undefine
*/

/*
var food =[];
food[0]='a'
food[7]='b'

//length 8 here also include spaces
console.log(food)
console.log([1])
*/


/*
//length
var b=[true, false ];
console.log(b.length)
//push function
var food =[];
food.push('pizza');
food.push('burger');
food.push('a','b');

console.log(food);
*/


/*
var userCity = prompt("Enter the city name:");

if (userCity === "karachi") {
  console.log("Welcome to the city of lights!");
} else {
  console.log("enter correct city ");
}
*/

/*
var signal =prompt("enter color")
if(signal=='red')
   document.write("must stop");
else if   
*/

/*
var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
}
*/

/*
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
*/

/*
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
*/

/*
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)
{
alert("The cost equals");
}

*/


/*
if (true){

    alert("True");
    }
    if (false){
    alert("False");
    }*/

/*
    if("car" < "cat")            // C=1,,,,, a=3,,,,,, r=4,,,,,t=7 >>> car=134 >>> cat= 137 so print true 

    {

    alert("car is smaller than cat");

        }*/
/*
        const marksSubject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
        const marksSubject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
        const marksSubject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
        const totalMarks = parseFloat(prompt("Enter total marks:"));
    
        // Calculate total marks obtained and percentage
        const marksObtained = marksSubject1 + marksSubject2 + marksSubject3;
        const percentage = (marksObtained / totalMarks) * 100;
    
        // Compute the grade based on percentage
        let grade;
        if (percentage >= 80) {
          grade = "A+";
        } else if (percentage >= 70) {
          grade = "A";
        } else if (percentage >= 60) {
          grade = "B";
        } else if (percentage >= 50) {
          grade = "C";
        } else {
          grade = "F";
        }
    
        // Display the result on the page
        document.write("<h2>Result:</h2>");
        document.write(`<p>Total Marks: ${totalMarks}</p>`);
        document.write(`<p>Marks Obtained: ${marksObtained}</p>`);
        document.write(`<p>Percentage: ${percentage.toFixed(2)}%</p>`);
        document.write(`<p>Grade: ${grade}</p>`);
        document.write(`<p>Remarks: ${grade === "F" ? "Fail" : "Pass"}</p>`);
        */
//question no 5

// Store a secret number (ranging from 1 to 10) in a variable. Prompt
// user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show “Close
// enough to the correct answer”.

//solution:

// var secretNumber =(Math.random() * 10) + 1;

// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userGuess === secretNumber) 
// {
//   alert("Bingo! Correct answer.");
// } 

// else (userGuess === secretNumber + 1 )
// {
//   alert("Close enough to the correct answer.");
// } 

// question no 6:

// Write a program that checks whether the given input is an even
// number or an odd number.

// solution:

// var number = parseInt(prompt("Enter a number:"));

// if (number % 2 == 0) {
//   alert("The number is Even.");
// } 
// else {
//   alert("The number is Odd.");
// }

//question no 7:

// Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

//solution:

// var num1 = parseFloat(prompt("Enter the first number:"));
// var  num2 = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;

// if (operation === "+") 
// {
//   result = num1 + num2 ;
// } 

// else if (operation === "-") 
// {
//   result = num1 - num2;
// } 
// else if (operation === "*")
//  {
//   result = num1 * num2;
// } 
// else if (operation === "/")
// {
// result = num1 / num2;
// }
// else if (operation === "%")
//  {
//   result =result = num1 % num2;;
// } 
// else {
//   alert("Error: Invalid operation.");
// }
//   alert("Result: " + result);

// question no 8:
// Write a program that takes input a number from user & state whether
// the number is positive, negative or zero.


// var a = parseInt(prompt("Enter a number:"));

// if (a > 0) 
// {
//   document.write("The given number is positive.");
// } 
// else if (a < 0)

//  {
//   document.write("The given  number is negative.");
// } 
// else {
//   document.write("The given  number is zero.");
// }

// question no 9:
// Write a program that takes a character (i.e. string of length 1) and
// returns true if it is a vowel, false otherwise

// var userInput = prompt("Enter a character a string of length 1:");
// var vowel = "aeiouAEIOU".includes(userInput);

// if (vowel)
// {
// document.write("True");
// }
// else{
// document.write("False");
// }

// Question no 10:
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks the user to enter his/her password
// c. Validate the two passwords:

// i. Check if user has entered password. If not, then give the
// message “ Please enter your password”

// ii. Check if both passwords are the same. If they are the
// same, show message “Correct! The password you
// entered matches the original password”. Show “Incorrect
// password” otherwise

//solution:

// var correctPassword = "1122";
// var userPassword = prompt("Enter your password:");

// if (!userPassword)
//  {
//   alert("Please enter your password.");
// } 

// else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } 

// else {
//   alert("Incorrect password.");
// }


// question n0 11:
// Write a program that take time as input from user in 24 hours clock
// format like: 1900 = 7pm. Implement the following case using if, else &
// else if statements..


// var c=["yellow",'red','green'];
// c.shift()
// document.write(c)

// var colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// var shiftedColor = colors.shift();
// document.write("<h2>Updated Array:</h2>");
// document.write(colors.join(', '));


// var color_names = [];
// var userInput = prompt("Enter the color that you want in this array");
// color_names.unshift(userInput);
 
// var userInput2 = prompt("Enter the color that you want in this array");
// color_names.push(userInput2);

// var c = ["Blue", "Brown"];
// color_names = c.unshift(color_names);

// var updated_4 = color_names.shift();
// document.write("<br>updated array is " + color_names);




// // Initialize an array with city names
// var cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
// // Copy 3 elements from cities array to selectedCities array
// selectedCities = cities.slice(0, 3);
// // Display the selected cities array in the browser
// document.write("<h2>Selected Cities:</h2>");
// document.write(selectedCities)



// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// // Create a new Set from the array to automatically remove duplicates
// var uniqueSet = new Set(arr1);

// // Convert the Set back to an array using Array.from() method or spread operator
// var uniqueArray = Array.from(uniqueSet); // OR var uniqueArray = [...uniqueSet];

// // Display the uniqueArray in the browser
// document.write("<h2>Sample Output:</h2>");
// document.write(uniqueArray);


var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];
// Loop through the first three choices in the aCities array and display with ordinal indicators
for (var i = 0; i < 3; i++) {
    var index = i + 1;
    var ordinalIndex;
    if (index > 3) {
        ordinalIndex = 1;
    } else {
        ordinalIndex = index;
    }

    document.write(index + o[ordinalIndex] + " choice is " + aCities[i] + "<br>");
}

// This uses the spread operator on both arrays a and b and creates a new array by concatenating 
// the elements from both arrays. The resulting array contains all the elements from a followed 
// by all the elements from b.


// The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an 
// existing array or object into another array or object.

// var a = [10, 20, 4, 40, 60, 70];
// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Use Set to automatically remove duplicates and convert back to an array
// var finalarray= Array.from(new Set([...a, ...b]));
// // Output the result
// console.log(finalarray);


// var array1 = ["Vijendra", "Singh"];
// var array2 = ["Singh", "Shakya","Singh"];
// array1 = array1.concat(array2);
// console.log(array1);


