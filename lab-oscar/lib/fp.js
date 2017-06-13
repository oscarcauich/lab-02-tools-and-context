'use strict';

const fp = module.exports = {};

fp.map = (list, callback) => {
  if(list !== null)
    return Array.prototype.map.call(list, callback);
  return null;
};
// fp.filter = (list, callback) => { return Array.prototype.re.apply(list, callback);};
fp.reduce = (list, callback) => {return Array.prototype.reduce.apply(list, callback);};
fp.concat = () => {};
fp.splice = () => {};
