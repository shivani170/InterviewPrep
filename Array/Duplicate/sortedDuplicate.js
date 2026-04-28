const printhasDuplicateArr = () => {
  var arr = [1, 2, 3, 4, 2, 6, 8, 8, 9];
  const sortedArray = arr.sort();
  console.log(sortedArray)
  i = 0;
  while (i < sortedArray.length) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      return true;
    }
    i++;
  }
  return false;

};
console.log(printhasDuplicateArr());

