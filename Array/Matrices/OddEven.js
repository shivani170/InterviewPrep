// Problem 2: Matrix

a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]; // 4 X 4

// output should exactly like this
//   1 3
//   6 8
//   9 11
//   14 16

for (i = 0; i < a.length; i++) {
  let str = "";
  for (j = 0; j < a[i].length; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        str += `${a[i][j]} `;
      }
    } else {
      if (j % 2 != 0) {
        str += `${a[i][j]} `;
      }
    }
  }
  console.log(str);
}
