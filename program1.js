function smallestMissingPositiveInteger(nums) {


  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (0 <= nums[i] < n && nums[i] != i) {
      const temp = nums[i];
      nums[i] = nums[temp];
      i = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}
  
  
  module.exports = smallestMissingPositiveInteger;

