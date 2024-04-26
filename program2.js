function longestSubstring(s) {
    const charIndexMap = {};
    let left = 0;
    let maxLen = 0;
  
    for (let right = 0; right < s.length; right++) {
      const currentChar = s[right];
  
      // Check if the character is already in the map (implicitly checks own properties)
      if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= left) {
        left = Math.max(left, charIndexMap[currentChar] + 1);
      }
  
      // Update the last seen index for the current character
      charIndexMap[currentChar] = right;
  
      // Update the max length if the current substring is longer
      maxLen = Math.max(maxLen, right - left + 1);
    }
  
    return maxLen;
  }

module.exports = { longestSubstring };
