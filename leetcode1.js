/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  const ocurr = {}
  const n = s.length
  let l = 0
  let r = 0
  let ans = 0

  while (r < n) {
    ocurr[s[r]] = ++ocurr[s[r]] || 1
    while (ocurr[s[r]] > 2) {
      --ocurr[s[l]]
      l++
    }
    ans = Math.max(ans, (r - l)+1)
    r++
  }

  return ans

};

// maximumLengthSubstring("bcbbbcba")

var minOperations = function (k) {
  let x = Math.ceil(Math.sqrt(k))
  let n = x - 1
  let m = Math.ceil(k / x) - 1

  return m + n

  
};

minOperations(11)