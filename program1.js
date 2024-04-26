function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  // Mark the presence of non-negative integers using their indices.
  for (let i = 0; i < n; i++) {
    let correctIndex = nums[i];
    // Ensure correctIndex is within valid range (0 to n-1)
    correctIndex = Math.max(Math.min(correctIndex, n - 1), 0);

    // Swap the element with the element at its correct index
    if (arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    }
  }

  // Find the first element that doesn't correspond with its index.
  for (let i = 0; i < n; i++) {
    if (arr[i] !== i) {
      return i + 1;
    }
  }

  // All elements are present, so the smallest missing positive integer is n + 1.
  return n + 1;
}


  
  module.exports = smallestMissingPositiveInteger;

