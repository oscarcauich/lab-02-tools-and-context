'use strict';

const fp = module.exports = {};

fp.map = (list, callback) => {
  if(list !== null)
    return Array.prototype.map.call(list, callback);
  return null;
};
fp.filter = () => {};
fp.reduce = () => {};
fp.concat = () => {};
fp.splice = () => {};
