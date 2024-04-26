function smallestMissingPositiveInteger(nums) {
  // Handle empty list case
  function smallestMissingPositiveInteger(nums) {
    // Handle empty list case directly
    if (nums.length === 0) return 1;
  
    // Modify the list in-place to mark seen positive numbers
    for (let i = 0; i < nums.length; i++) {
      const val = Math.abs(nums[i]);
      if (val > 0 && val <= nums.length) {
        // Decrement the value at the index (val - 1) to mark it as seen
        nums[val - 1] = -Math.abs(nums[val - 1]);
      }
    }
  
    // Find the first non-negative number (which indicates the missing number)
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= 0) {
        return i + 1;
      }
    }
  
    // If no missing number is found, return the next positive integer
    return nums.length + 1;
  }
  
  // Test cases
  console.log(smallestMissingPositiveInteger([3, 4, -1, 1])); // Output: 2
  console.log(smallestMissingPositiveInteger([1, 2, 0]));      // Output: 3
  console.log(smallestMissingPositiveInteger([-1, -3, 4, 2]));  // Output: 1
  console.log(smallestMissingPositiveInteger([]));              // Output: 1
  
  
  module.exports = smallestMissingPositiveInteger;

