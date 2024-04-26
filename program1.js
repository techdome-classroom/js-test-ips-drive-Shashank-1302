function smallestMissingPositiveInteger(nums) {
   if (nums.length === 0) return 1;

   for (let i = 0; i < nums.length; i++) {
     const val = Math.abs(nums[i]);
     if (val > 0 && val <= nums.length) {
       nums[val - 1] = -Math.abs(nums[val - 1]);
     }
   }
 
   for (let i = 0; i < nums.length; i++) {
     if (nums[i] >= 0) {
       return i + 1;
     }
   }
 
   return nums.length + 1;
 }
  

  
  module.exports = smallestMissingPositiveInteger;

