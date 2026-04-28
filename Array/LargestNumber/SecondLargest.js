
//Approach 1
const getSecondLargestWith2Pass = (arr) => {
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest
};


//Approach 2
const getSecondLargestWith1Pass = (arr) => {
    let largest = -1;
    let secondLargest = -1;
  
    for (let i = 0; i < arr.length; i++) {
      largest = arr[i]
      secondLargest = arr[i+1]
      if(secondLargest > largest) {
        secondLargest = largest
      }
    }
  
   
    return secondLargest
  };

const getSecondLargestRecursively = () => {};
// Driver Code

const arr = [10, 50, 40, 20, 30];
const output1 = getSecondLargestWith2Pass(arr);
const output2 = getSecondLargestWith2Pass(arr);

const output3 = getSecondLargestRecursively(arr);
console.log(output1);
console.log(output2);
console.log(output3)
