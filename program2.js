function longestSubstring(s) {
const charIndexMap = {};
  let left = 0;
  let maxLen = 0;

  for (int right = 0; right < s.length; right++) {
    const currentChar = s[right];
    if (charIndexMap.hasOwnProperty(currentChar) && charIndexMap[currentChar] >= left) {
      left = Math.max(left, charIndexMap[currentChar] + 1);
    }
    charIndexMap[currentChar] = right;
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}


module.exports = { longestSubstring };
