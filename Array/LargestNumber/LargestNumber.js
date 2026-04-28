const getLargest = (arr) => {
  if (!arr.length) return "Invalid";
  let ln = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > ln) {
      ln = arr[i];
    }
  }
  return ln;
};

const getLargestRecursively = (arr, idx = 0, ln = arr[0]) => {
  if (!arr.length) return "Invalid";
  if (idx >= arr.length) return ln;
  if (arr[idx] > ln) ln = arr[idx];
  return  getLargestRecursively(arr, idx + 1, ln);
};

// Driver Code

const arr = [10, 50, 10, 20, 30];
const output1 = getLargest(arr);
const output2 = getLargestRecursively(arr);
console.log(output1);
console.log(output2);
