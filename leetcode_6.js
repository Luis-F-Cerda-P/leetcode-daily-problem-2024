/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    obj = obj.filter(x => x)
  } else {
    const myCopy = Object.entries(obj)
    for (const [key, value] of myCopy) {
      if (Array.isArray(value)) {
        obj[key] = compactObject(value)
      } else if (!value) {
        delete obj[key]
      }
    }
  }


  return obj
};

compactObject([null, 0, 5, [0], [false, 16]])