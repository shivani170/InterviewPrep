const getElementIndex = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
};

const getElementIndexRecursively = (arr, x, idx) => {
  if (idx >= arr.length)  return -1
  if (arr[idx] === x)  return idx
  return getElementIndexRecursively(arr, x, idx + 1)
};

// Driver Code
const input = [1, 2, 3, 4];
const x = 3;
 console.log(getElementIndex(input, x));
console.log(getElementIndexRecursively(input, x, 0));

// 🧠 Dry Run:
// Initial values:
// arr = [1, 2, 3, 4]

// x = 3

// Iteration 1:
// i = 0 → arr[0] = 1

// 1 === 3? ❌ → move on

// Iteration 2:
// i = 1 → arr[1] = 2

// 2 === 3? ❌ → move on

// Iteration 3:
// i = 2 → arr[2] = 3

// 3 === 3? ✅ → return 2
