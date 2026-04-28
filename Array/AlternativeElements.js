//Iterative approach[]

const getAlternativeElementsIteratively = (arr) => {
  let output1 = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    output1.push(arr[i]);
  }
  return output1
};

// Output 10 20 30
//Modulus
const getAlternativeElementsModulus = (arr) => {
  let output2 = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      output2 += arr[i] + " ";
    }
  }
  return output2
};


// Recursive Method

const getAlternativeElementsRecursively = (arr, idx, res) => {
  if (idx > arr.length) return;
  res.push(arr[idx]);
  getAlternativeElementsRecursively(arr, idx + 2, res);
  return res
};

// Driver code
const arr = [10, 20, 30, 40, 50];
const res = [];
const output1 = getAlternativeElementsIteratively(arr)
const output2 = getAlternativeElementsModulus(arr)
const output3 = getAlternativeElementsRecursively(arr, 0, res);

console.log(output1.join(" "))
console.log(output2)
console.log(output3.join(" "))
