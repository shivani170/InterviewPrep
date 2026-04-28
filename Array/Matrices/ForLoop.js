// Take a matrix array and try to print elements alternatively

const A = [
  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19],
  [1, 1, 9],
];

const printAlternativeElements = () => {
console.log('[')
  for (i = 0; i < A.length; i++) {
     console.log(`[`)
    for (j = 0; j < A.length - 1; j++) {
      console.log(`${j%2 == 0 ? A[i][j] : ' '}`)
    }
    console.log(']')
  }
  console.log(']')

};

printAlternativeElements(A);
// [
// i=0 j=0 B =[11]
// 

