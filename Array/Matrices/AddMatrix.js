const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const B = [
  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19],
];

const addMatrix = () => {
  for (i = 0; i < A.length; i++) {
    let row1 = "";
    for (j = 0; j < A.length; j++) {
      // console.log(A[i][j])
      // console.log(B[i][j])
      let add1 = A[i][j] + B[i][j]
      row1 = row1 + add1  + " ";
    }
    console.log(row1);

  }
};

addMatrix();
