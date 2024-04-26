function smallestMissingPositiveInteger(nums) {


  const n = nums.length;
  for (let i = 0; i < n; i++) {
    // Check if the current number is within the range (1 to n) and is not at its correct position
    while (0 <= nums[i] < n && nums[i] != i) {
      // Swap the number with the value at its correct index
      const temp = nums[i];
      nums[i] = nums[temp];
      i = temp;
    }
  }

  // Find the first number that is not at its correct position (i.e., the smallest missing positive integer)
  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }

  // If all numbers are present, return n + 1 (smallest missing positive integer)
  return n + 1;
}
  
  }
  
  module.exports = smallestMissingPositiveInteger;

