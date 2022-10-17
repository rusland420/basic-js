const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  let arr =  n.toString(10).split('').map(int => parseInt(int, 10))
 let res = arr.reduce(function(a,b){
  // let ab=a+b
  if(a+b>9){
    return getSumOfDigits( a+b )
  }
  return a+b
 })

  return res;
}
// getSumOfDigits( 545 )
module.exports = {
  getSumOfDigits
};
