let A = [
  [1, 2, 3, 4, 23],
  [5, 6, 7, 8, 45],
  [9, 10, 11, 12, 34],
  [13, 14, 15, 16, 76],
  [17, 18, 19, 20, 21],
]; // 5 X 5

//   output
//   1       23
//     6 	8
//   	 11
//     14   16
//   17 	  21

// for (i = 0; i < A.length; i++) {
//   let str = "";
//   for (j = 0; j < A[i].length; j++) {
//     if (i === j) {
//       str += `${A[i][j]}`;
//     } else if (i + j == 4) {
//       str += `${A[i][j]}`;
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }

// output;

// 1 2   3  4  23
// 5   6 	8  45
// 9	  11   34
// 13	14  16 76
// 17 18 19 20 21

for (i = 0; i < A.length; i++) {
  let str = "";
  for (j = 0; j < A[i].length; j++) {
  // i = 0 j= 4
    if (i === A.length - 1 || i === j || i === 0 || j=== 0 || j === A.length - 1 || i + j == 4) {
      str += `${A[i][j]} `;
    }
     else {
      str += " ";
    }
  }
  console.log(str);
}
