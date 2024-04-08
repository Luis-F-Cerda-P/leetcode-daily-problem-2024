/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const chars = s.split('')
  const stack = []
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    if (char === '(') {
      stack.push(i)
    } else if (stack.length > 0 &&
      char === ')') {
      stack.pop()
    } else if (stack.length === 0 &&
      char === ')') {
      chars[i] = ''
    }
  }

  while (stack.length > 0) {
    chars[stack.pop()] = ''
  }

  const result = chars.filter(x => x).join('')

  return result 
};

minRemoveToMakeValid("a)b(c)d")