// Description for the problem:
// https://leetcode.com/problems/reveal-cards-in-increasing-order/description/

/**
 * 
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const sDeck = deck.toSorted((a, b) => b - a)
  const result = []

  for (card of sDeck) {
    if (result.length > 1) result.unshift(result.pop())
    result.unshift(card)
  }

  return result
};