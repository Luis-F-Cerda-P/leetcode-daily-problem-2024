/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
// var countSubarrays = function (nums, minK, maxK) {
//   const length = nums.length
//   let copy
//   let minPresent
//   let maxPresent
//   let window_e = 0
//   let window_s = 0
//   let answer = 0

//   while (window_e <= length) {
//     copy = nums.slice(window_s, window_e + 1)
//     minPresent = Math.min(...copy) >= minK
//     maxPresent = Math.max(...copy) <= maxK
//     while (minPresent && maxPresent) {
//       answer++
//       window_e++
//       copy = nums.slice(window_s, window_e + 1)
//       minPresent = Math.min(...copy) >= minK
//       maxPresent = Math.max(...copy) <= maxK
//     }
//     window_s = window_e
//     window_e++
//   }
//   return answer
// };
var countSubarrays = function (nums, minK, maxK) {

  let maxPosition = -1;
  let minPosition = -1;
  let leftBound = -1;
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      leftBound = i;
    }
    if (nums[i] == minK) minPosition = i;
    if (nums[i] == maxK) maxPosition = i;
    let a = Math.min(maxPosition, minPosition) - leftBound;
    if (a > 0) answer += a;

  }
  return answer;
};
countSubarrays([1, 3, 5, 2, 7, 5], 1, 5)