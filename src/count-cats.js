const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */



function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
let count = []
 const countEarsCats= matrix.filter((elem) =>elem.includes('^^') )
 console.log(countEarsCats)
// console.log(matrix)
 if(countEarsCats===0){
  return 0
 }
 countEarsCats.forEach(x=>{
  x.forEach(el=>{
    console.log("el",el)
    if (el==='^^'){
      count.push(el)
    }
  })


 })
console.log("count",count)
 return count.length
}
// countCats([
//   [0, 1, '^^', '^^'],
//   [0, '^^', 2],
//    [ 1, 2]
//   ]) 

module.exports = {
  countCats
};
