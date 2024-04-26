function longestSubstring(s) {


    const charIndexMap = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // If the character is already seen, update the left pointer to skip past the previous occurrence
    if (charIndexMap.hasOwnProperty(currentChar) && charIndexMap[currentChar] >= left) {
      left = Math.max(left, charIndexMap[currentChar] + 1);
    }

    // Update the last seen index for the current character
    charIndexMap[currentChar] = right;

    // Update the max length if the current substring is longer
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
}

module.exports = { longestSubstring };
