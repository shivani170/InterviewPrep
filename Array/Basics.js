// 1.  Print numbers from 1 to 10.
// 2. Print even numbers from 2 to 20
// 3. Print odd numbers from 1 to 19:
// 4. Calculate the sum of numbers from 1 to 100:
// 5.  Print elements of an array.  const arr = [10, 20, 30, 40, 50];
// 6. Find the largest element in an array:   const arr = [5, 25, 15, 30, 10];
// 7. Find the index of a specific element in an array:  const arr = [10, 20, 30, 40, 50];
// const target = 30;
// 8. Print multiplication table of 5.
// 9. Check if a number is prime.

// const prob1 = () => {
//   let integersInALine = "";
//   for (let i = 1; i <= 10; i++) {
//     const _blank = i !== 10 ? " " : "";
//     integersInALine += i + _blank;
//   }
//   console.log(integersInALine);
// };
// prob1(); // 1 2 3 4 5 6 7 8 9 10

// const prob2 = () => {
//   let output = "";
//   for (let i = 2; i <= 20; i+=2) {
//     output = output + i + ' '; //2 4
//   }
//   console.log(output);
// };
// prob2(); // 2 4 6 8 10 12 14 16 18 20

// const prob3 = () => {
//   let output = "";
//   for (let i = 1; i <= 19; i += 2) {
//     output = output + i + " ";
//   }
//   console.log(output);
// };
// prob3(); //1 3 5 7 9 11 13 15 17 19

// const prob4 = () => {
//     let sum = 0
//     for(let i=1; i <=100; i++ ){
//         sum += i
//     }
//     console.log(sum)
// }
// prob4() //5050

// const arr = [10, 20, 30, 40, 50]

// const prob5 = () => {
//     let output = ''
//     for(let i=0; i < arr.length; i++ ){ // should be always less than length
//         output += arr[i] + ' '
//     }
//     console.log(output)
// }
// prob5() //10, 20, 30, 40, 50

// const arr = [5, 25, 15, 30, 10];
// const prob6 = () => {
//   let maxOutput = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxOutput) maxOutput = arr[i];
//   }
//   console.log(maxOutput);
// };

// prob6(); //30

// const arr = [10, 20, 30, 40, 50];
// const target = 30;
// // Find the index
// const prob7 = () => {
//   let findIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       findIndex = i;
//     }
//   }
//   console.log(findIndex);
// };

// prob7(); //2

// const prob8 = () => {
//     let multiplicationOf5 = ''
//     for(let i=5; i<=50; i+=5) {
//         multiplicationOf5 += i + ' '
//     }
//     console.log(multiplicationOf5)
// }
// prob8()

// const prob8 = () => {
//     let multiplicationOf5 = ''
//     for(let i=1; i<=10; i++) {
//         multiplicationOf5 = `5 * ${i} = ${5*i}`
//         console.log(multiplicationOf5)
//     }

// }
// prob8()
// OUTPUT:
// 5  * 1 = 5
// 5  * 2 = 10
// 5  * 3 = 15
// 5  * 4 = 20
// 5  * 5 = 25
// 5  * 6 = 30
// 5  * 7 = 35
// 5  * 8 = 40
// 5  * 9 = 45
// 5  * 10 = 50

// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 8];

// const prob9 = () => {
//   let output = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 || arr[i] === 1) {
//       for (let j = 0; j < arr[i]; j++) {
//         if (arr[i] % j !== 0) {
//           output += arr[i];
//         }
//       }
//     }
//   }
//   console.log(output);
// };

// prob9();

// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351

// const prob11 = (arr) => {
//   const sum = arr.reduce(
//     (accumulator, initialValue) => (accumulator += initialValue),
//     0
//   );
// console.log (sum)

//   let output = 0;

//   for (let i = 0; i < arr_1.length; i++) {
//     output += arr[i];
//   }
//   console.log(output);
// };
// prob11(arr_1);

// Using a for loop print all even numbers up to and including n. Don’t include 0.

// const prob12 = (n) => {
//     let output = ''
//     for(let i=2; i <= n; i+=2){
//         output += i
//     }
//     console.log(output)
// }
// prob12(40)
// Using a for loop output the elements in reverse
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output:
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

// const prob13 = () => {
//     let output = ''
//     for(let i=arr.length - 1; i >= 0; i-- ) {
//         output += arr[i] + ' '
//     }
//     console.log(output)
// }
// prob13()

// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
// let arr_3   = [4, 6, 7];
// let arr_4    = [8, 1, 9];
// Example output:
// [12, 7, 16]

// const prob14 = () => {
//     let output = []
//     for(i = 0; i<arr_3.length; i++){
//         for(j=0; j< arr_4.length;j++){
//             if(i === j) {
//                 output.push(arr_3[i] + arr_4[j])
//             }
//         }
//     }
//     console.log(output)

// }
// prob14()

// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.
let str1 = "javascript";
const newArr = str1.split("");
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
// ????

const prob15 = () => {
  let output = "";
  for (let i = 0; i < newArr.length; i++) {
    if (i % 2 !== 0) {
      output += "Z";
    } else {
      output += newArr[i];
    }
  }
  console.log(output);
};
// prob15();

// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let str2 = "don’t know why";
// Example output:
// “yes”

const prob16 = () => {
  const newArr = str2.split("");
  let output = "";
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "y") {
      output = "Yes";
    }
  }
  console.log(output);
};
// prob16()

// Given a number n Calculate the factorial of the number
let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

const prob17 = () => {
  let output = 1;
  for (let i = n2; i >= 1; i--) {
    output = output * i;
  }
  console.log(output);
};
// prob17()

// Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.
let pin = "0704";
// Example output:
// Please make your guess:
// 4544
// Sorry that was wrong.
// Please make your guess:
// 4444
// Sorry that was wrong.
// Please make your guess:
// 0704
// That was correct!

const prob18 = (inputPin) => {
  let output = "";
  console.log(inputPin.length);
  if (inputPin.length > 4) {
    output = "Incorrect pin";
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (pin === inputPin) {
      output = "That was correct!";
    } else {
      output = `Sorry that was wrong. \n Please make your guess:`;
    }
  }
  console.log(output);
};
// prob18("66799");

// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.
// let str3 = "racecar";
// let str4 = "Java";
// Example output:
// string1 palindrome?:
// Yes
// string2 palindrome?:
// No

const prob19 = (str) => {
  const newArr = str.split("");
  let newStr = "";
  for (let i = newArr.length - 1; i >= 0; i--) {
    newStr += newArr[i];
  }
  if (str === newStr) {
    console.log("Yes");
  } else {
    console.log("This is not a palindrome string");
  }
};

prob19("madame");

// This is a code wars kata. click here to train on “Grasshopper – Summation” on
// code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
let num1 = 2;
let num2 = 8;
// Example output:
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36

const prob20 = (num) => {
    let sum = 0
    for(let i = 0; i <=num; i++) {
        sum += i
    }
    console.log(sum)
}
prob20(num2)