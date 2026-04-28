const A = [
  [1, 2, 3],
  [4, 5, 6],
];

const printMatrices = (matA) => {

  for (let i = 0; i < matA.length; i++) {
  let row1 = "";

    for (let j = 0; j < matA[i].length; j++) {
      row1 = row1 + matA[i][j] + " ";
    }
    console.log(row1);
  }
};

printMatrices(A);
