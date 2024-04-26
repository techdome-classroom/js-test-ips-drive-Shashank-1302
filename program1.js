function smallestMissingPositiveInteger(nums) {
    // Handle the base case where the list is empty
    if (!nums.length) return 1;

    const positiveNumbers = new Set();
   for (const num of nums) {
     if (num > 0) {
       positiveNumbers.add(num);
     }
   }
 
   for (let i = 1; i <= positiveNumbers.size + 1; i++) {
     if (!positiveNumbers.has(i)) {
       return i;
     }
   }
 
   return positiveNumbers.size + 1;
 }


  
  module.exports = smallestMissingPositiveInteger;

