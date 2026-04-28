const hasDuplicateMap = () => {
  const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

  const newMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (newMap.has(nums[i])) {
      return "true";
    }
    newMap.set(nums[i], true);
  }
  console.log(newMap);
  return 'false'
};

hasDuplicateMap();
