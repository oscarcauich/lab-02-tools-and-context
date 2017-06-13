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
fp.concat = (arr1, arr2) => {
  return Array.prototype.concat.call(arr1, arr2);
};
fp.splice = () => {};
