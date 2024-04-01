// Write a program to check whether a year entered by the user is a leap year or not.
// Write a program to check whether a given number is positive, negative, or zero.
// Write a program to determine the eligibility of a person to vote based on their age.
// Write a program to calculate the grade of a student based on their marks in a subject.
/*
// Write a program to check whether a given number is even or odd.
let no = 10;

if (no % 2 == 0) {
	// output : 10 is even
	// 1 - String concatination
	console.log(no + " is even");
} else {
    console.log(no + " is odd");
}
*/
/*
// Write a program to find the largest among three numbers entered by the user.

let num1 = 40,
	num2 = 85,
	num3 = 90;
// logic 1
if (num1 > num2) {
	if (num1 > num3) {
		// num1 is gretswer
	} else {
		// numb 3greatrr
	}
} else {
	if (num2 > num3) {
		// num1 is gretswer
	} else {
		// numb 3greatrr
	}
}

// logic 2
if (num1 > num2 && num1 > num3) {
	//console.log("num1 is grateer ");
	// 2 - string interpolation

	console.log(`${num1} is gretaer than ${num2} and ${num3}`);
} else if (num2 > num1 && num2 > num3) {
	console.log(`${num2} is gretaer than ${num1} and ${num3}`);
} else {
	console.log(`${num3} is gretaer than ${num2} and ${num1}`);
}


*/
/*
// Write a program to determine whether a character entered by the user is a vowel or consonant.


let character = "A"; // a , e , i , o , u
if (
	character.toLowerCase() == "a" ||
	character.toLowerCase() == "e" ||
	character.toLowerCase() == "i" ||
	character.toLowerCase() == "o" ||
	character.toLowerCase() == "u"
) {
	let message = `${character} is vowel`;
	console.log(message);
} else {
	let message = `${character} is not vowel`;
	console.log(message);
}

*/

/*
// Write a program to determine whether a triangle with given sides is equilateral

let side1 = 4;
let side2 = 4;
let side3 = 4;
//   4  != 4          4 !=4
if (side1 != side2 || side2 != side3 || side1 != side3) {
	console.log("Not Equilatral");
} else {
	console.log("Equilatral");
}
*/

/*Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400.*/

/*
1 - divisble by 4 but not with 100
2 - 400 diviisnle then leap year 
*/

let year = 2024;

if (year % 4 == 0 && year % 100 != 0) {
	console.log("Leap year : " + year);
} else if (year % 400 == 0) {
	console.log("Leap year : " + year);
} else {
	console.log("Not a Leap year : " + year);
}
