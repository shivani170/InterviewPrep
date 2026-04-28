// *
// * *
// * * *
// * * * *
// * * * * *

function writeNaturalNumber() {
  for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

// writeNaturalNumber();

function writeNaturalNumber(n) {
  for (let row = 0; row < n; row++) {
    let rowString = "";
    for (let col = 0; col <= row; col++) {
      rowString += col + 1;
    }
    console.log(rowString);
  }
}
// writeNaturalNumber(4);

// Indices:
// 00
// 10 11
// 20 21 22
// 30 31 32 33
function writeIndex(n) {
  for (let row = 0; row < n; row++) {
    let rowStr = "";
    for (let col = 0; col <= row; col++) {
      rowStr += `${row}${col} `;
    }
    console.log(rowStr);
  }
}
// writeIndex(4);

// *
// * * *
// * * * * * *
// * * * * * * * * *

1 * 0;
3 * 1;
3 * 2;
3 * 3;

function writePattern(n) {
  for (let row = 0; row < n; row++) {
    let rowStr = "";
    for (let col = 0; col <= (row === 0 ? 3 * row : 3 * row - 1); col++) {
      rowStr = rowStr + "*" + " ";
    }
    console.log(rowStr);
  }
}
// writePattern(4);

// ((row = 0), (col = 0), (rowStr = "*"));
// ((row = 1), (col = 0), (rowStr = "*"));

// 3. Inverted Right Triangle
// ****
// ***
// **
// *

function invertedPattern(n) {
  for (let row = n; row >= 1; row--) {
    let rowStr = "";
    for (let col = row; col >= 1; col--) {
      rowStr += "*" + "";
    }
    console.log(rowStr);
  }
}
// invertedPattern(4);

// ((row = 4), (col = 4), (rowStr = "* * * *"));
// ((row = 1), (col = 0), (rowStr = "* * *"));

// Level 2: Shape + Space Awareness
// 5. Left-Aligned Triangle
//       *
//     * *
//   * * *
// * * * *

// Row 1 -> *,  spaces => 3
// Row 2 => **, spaces => 2
// Row 3 => ***, spaces => 1
// Row 4 => ****, spaces => 0
function leftAlignedTriangle(n) {
  for (let row = 0; row < n; row++) {
    let rowStr = "";
    for (let col = 0; col < n; col++) {
      if (col >= n - (row + 1)) {
        rowStr += "*";
      } else {
        rowStr += " ";
      }
    }
    console.log(rowStr);
  }
}

// let condition = col < n - row

// leftAlignedTriangle(4);
// r=0, c=0, s=1, '*'=""
// r=0, c=1, s=2, '*'=""
// r=0, c=2, s=3, '*'=""
// r=0, c=3, s=3, '*'='*'

// r=1, c=0, s=1, '*'=""
// r=1, c=1, s=2, '*'=""
// r=1, c=2, s=2, '*'="*"
// r=1, c=3, s=2, '*'="**"

// r=2, c=0, s=1, '*'=""
// r=2, c=1, s=1, '*'="*"
// r=2, c=2, s=1, '*'="**"
// r=2, c=3, s=1, '*'="***"

// r=3, c=0, s=0, '*'='*'
// r=3, c=1, s=0, '*'='**'
// r=3, c=2, s=0, '*'='***'
// r=3, c=3, s=0, '*'='****'

//       *
//     * *
//   * * *
// * * * *

// ((row = 0), (col = 0), (rowStr = "-"));
// ((row = 0), (col = 1), (rowStr = "--"));
// ((row = 0), (col = 2), (rowStr = "---"));
// ((row = 0), (col = 3), (rowStr = "---*"));

// ((row = 1), (col = 0), (rowStr = "-"));
// ((row = 1), (col = 1), (rowStr = "--"));
// ((row = 1), (col = 2), (rowStr = "--*"));
// ((row = 1), (col = 3), (rowStr = "--**"));

// ((row = 3), (col = 0), (rowStr = "*"));
// ((row = 3), (col = 1), (rowStr = "**"));
// ((row = 3), (col = 2), (rowStr = "****"));
// ((row = 3), (col = 3), (rowStr = "*****"));

// 6. Pyramid
//    *
//   ** *
//  *** **
// **** ***
function pyramidTriangle(n) {
  for (let row = 0; row <= n; row++) {
    let rowStr = "";
    for (col = 0; col <= n; col++) {
      if (col >= n - row) {
        rowStr += "*";
      } else {
        rowStr += " ";
      }
      if(row > 0 && col < row ){
        rowStr += "*"
      }
    }
    console.log(rowStr);
  }
}
pyramidTriangle(4);
// r=1, c=0, '*'=1
// r=1, c=1, '*'=0

// r=2, c=0, '*'=1
// r=2, c=1, '*'=2
// r=2, c=2, '*'=2
// r=2, c=3, '*'=2

// r=3, c=0, '*'=1
// r=3, c=1, '*'=2
// r=3, c=2, '*'=3
// r=3, c=3, '*'=3

// 7. Inverted Pyramid
// * * * *
//  * * *
//   * *
//    *

// 8. Repeating Number Pyramid
// 1
// 2 2
// 3 3 3
// 4 4 4 4

// 8. Repeating Number Pyramid
// 1
// 2 2
// 3 3 3
// 4 4 4 4

// Focus: using row number as data

// 🟠 Level 3: Logic Builders (this is where thinking sharpens)
// 9. Floyd’s Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// Focus: maintaining a running variable

// 10. 0–1 Pattern
// 1
// 0 1
// 1 0 1
// 0 1 0 1

// Focus: condition based on (row + col)

// 11. Hollow Square
// * * * *
// *     *
// *     *
// * * * *

// Focus: boundary conditions

// 12. Hollow Pyramid
//    *
//   * *
//  *   *
// * * * *

// Focus: combining shape + conditions

// 🔵 Level 4: Mind-Twisters (strong understanding test)
// 13. Butterfly Pattern
// *      *
// * *  * *
// * * * *
// * *  * *
// *      *

// 14. Diamond
//    *
//   * *
//  * * *
//   * *
//    *

// Focus: breaking pattern into halves

// 15. Pascal’s Triangle
// 1 a
// 1 1 a+b
// 1 2 1 (a+b)^2
// 1 3 3 1 (a+b)^3
// 1 4 6 4 1 (a+b)^4
