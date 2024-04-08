/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  function subarraysWithKDisctinctAtMost(nums, k) {
    const arrLength = nums.length
    const numFreq = {}
    let distinctValuesCount = 0
    let window_s = 0
    let window_e = 0
    let total = 0

    while (window_e < arrLength) {
      if (numFreq[nums[window_e]] !== undefined && numFreq[nums[window_e]] !== 0) {
        numFreq[nums[window_e]]++
      } else {
        numFreq[nums[window_e]] = 1
        distinctValuesCount++
      }
      while (distinctValuesCount > k) {
        if (--numFreq[nums[window_s]] === 0) {
          distinctValuesCount--
        }
        window_s++
      }
      total += (window_e - window_s) + 1
      window_e++
    }

    return total
  }

  const supSet = subarraysWithKDisctinctAtMost(nums, k)
  const subSet = subarraysWithKDisctinctAtMost(nums, k - 1)

  return supSet - subSet
};

subarraysWithKDistinct([1, 2, 1, 2, 3], 2)