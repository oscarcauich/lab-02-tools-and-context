'use strict';

const fp = module.exports = {};

fp.map = (list, callback) => {
  if(list !== null)
    return Array.prototype.map.call(list, callback);
  return null;
};
fp.filter = (list, callback) => {
  if(list !== null)
    return Array.prototype.filter.call(list, callback);
  return null;
};
fp.reduce = (list, callback) => {
  if(list !== null)
    return Array.prototype.reduce.apply(list, callback);
  return null;
};
fp.concat = (arr1, arr2) => (arr1 !== null && arr2 !== null) ? Array.prototype.concat.call(arr1, arr2) : null;
fp.splice = () => {};
