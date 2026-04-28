// Array indexing (Concepts):

const a = [2, 6, 8, 10, 14, 13, 2, 11, 45, 67] //10 elements
a[5] = 13


// 2-D array
const a = [
						[1,2,5,9], // 0th row
            [3,11,67,34], // 1st row
            [6,7,68,89] // 2nd row
          ]

const b = [
				[9,1,2,91], // 0th row
        [11,67,34,4], // 1st row
        [7,68,89,76] // 2nd row
]
b[2][1] = 68

//Scalar addition
// 3a + b = c

let c;

for(i=0; i<a.length; i++){
	for(j=0; j<a[i].length; j++){
  	c[i][j] = 3 * a[i][j] + b[i][j]
  }
}

// let c= [
// 	1*9+2*11 1*1+2*67 1*2+2*34
// ] // 1 X 3

// c = [
//  A[0][0]*B[0][0]+A[0][1]*B[1][0] A[0][0]*B[0][1]+A[0][1]*B[1][1] A[0][0]*B[0][2]+A[0][1]*B[1][2]
// ]