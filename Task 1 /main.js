// Loop Assignments (Don’t use arrays)

// 1.  Make a program that prints all positive numbers that are odd and smaller
//     than 100 starting from 1. (1 3 5 7 9 11...)

/* Solution by me mistakenly

//const num = Number(prompt('Please enter a number'));

    const find = num % 2
    
if (num < 0){console.log("Please enter a positive number")} 
else if ( find == 0 ){console.log('number is even')}
 else{console.log("Number is odd")}; //

 // Solution by Margit
 
 for (let i = 1; i < 100; i += 2) {
  console.log(i);
}
 */


// 2.  Make a program that prints all positive numbers that are smaller than
//     100 and even, in this order: 2 98 4 96 6 94... Print result in one line.
/*let num
if (num >= 0){console.log}*/

/* let answer = '';
let end = 98;

for (let i = 2; i < 100; i += 2) {
  answer += ' ' + i + ' ';
  answer += ' ' + end + ' ';
  end -= 2;
}
console.log(answer);
*/

// 3.  Make a program that asks repeatedly from the user the distance (km) and
//     time (h) and calculates average speed. The program ends when user gives
//     0 for the distance. (After getting 0, the program does not ask anything
//     from the user.)

/* Solution #1

let distance = Number(prompt("Enter your driven distance (km)"))
let time = Number(prompt("Enter the time you have driven (h)"))
let average = distance / time; 
if(distance != 0) {console.log("Your average speed is " + average)};
*/

/* Solution #2

let distance, time;

while (distance != 0) {
  distance = prompt('Enter distance in kilometers');

  if (distance == 0) {
    console.log('distance 0 - game over');
    break;
  }

  time = prompt('Enter time in hours');
  let average = distance / time;
  console.log('average is: ', average);
} */
// 4.  Make a program that asks 20 numbers from user. After that the program
//     prints out how many of those numbers were even.
/* Solution

let even = 0;

for (let counter = 0; counter < 20; counter++) {
  let input = Number(prompt('enter a number'));
  if (input % 2 == 0) {
    even++;
  }
}
console.log('There was', even, 'even numbers');
*/


// 5.  Make a program that asks numbers from the user, until user gives 0 and
//     then program ends. In the end program prints out average of the numbers.

/* let input;
let sum = 0;
let count = 0;

while (input !== 0) {
  input = parseFloat(prompt('enter a number'));
  sum += input;
  count++;
}

console.log(sum / (count - 1));*/

for (let num != 0;){let input= Number(prompt("Enter a number"));
if (input = 0) {}
}

// 6.  Make a program that asks 25 numbers form the user. In the end program
//     printsout average of the numbers.
let num = Number(prompt("Please enter a number"));
let average = 
for (let num = 0; num<25;num++){console.log()}

// 7.  Make a program that ask first one number from the user. After that the
//     program asks: "Do you want to continue giving numbers?(y/n)". If user
//     answers yes, the program continues to ask another number. If user answers
//     no, program ends. In the end, program prints out average of the numbers.

 let num = prompt("Please enter a number")
 let answerY = prompt("Do you want to continue giving numbers?")
 let answerN = 
 for (let num)

// 8.  Make a program that asks first how many numbers user wants to give to
//     the program. After that program asks those numbers. In the end program
//     prints out the smallest number that user gave.


// 9.  Make a program that asks ten numbers and in the end prints out two
//     biggest numbers.

let num = Number(prompt("Please enter ten numbers"));
let big1 = num <=10 
let big2 = num <10 - 1
for (let num=0;num<10;num++){console.log(big1); console.log(big2)};

// 10. Make a program that asks ten numbers. Program calculates and prints out
//     sum and average, also prints out the smallest and biggest number.
let num = Number(prompt("Please enter 10 numbers"))

for (num = 0; num<10;num++){console.log()}
