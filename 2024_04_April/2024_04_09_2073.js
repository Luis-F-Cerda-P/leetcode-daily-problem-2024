/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let seconds = 0

  for (let i = 0; i < tickets.length; i++) {
    const buyer = tickets[i]
    i <= k ?
      seconds += Math.min(tickets[k], buyer) :
      seconds += Math.min(tickets[k] - 1, buyer)
  }

  return seconds
};


