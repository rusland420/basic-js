const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/*arr*/ ) {
 
  throw new NotImplementedError('Not implemented');
  // let aqwe=arr
  // let newArr=[]
  // if (!arr instanceof Array || !Array.isArray(arr) ) {
  //   throw new Error("'arr' parameter must be an instance of the Array!");
  // }

  // if(arr.length===0){
  //   return arr;
  // }
 

  //   for(let i=0;i<arr.length;i++){
  //     if(arr[i]==='--discard-next'&& i!=arr.length-1){
  //       i++
  //       i++
  //     }
  //     if(arr[i]==='--discard-next'&& i===arr.length-1){
  //       i++
  //     }
  //     if(arr[i]==='--discard-prev'){
  //       i++
  //     }
  //     if(arr[i+1]==='--discard-prev'){
  //       i++
  //       i++
  //     }
  //     if(arr[i]==='--double-next'&& i!=arr.length-1){
  //       newArr.push(arr[i+1])
  //       i++
  //     }
  //     if(arr[i]==='--double-next'&& i===arr.length-1){
  //       i++
  //     }
  //    if(arr[i]==='--double-prev' && i!=0){
  //       newArr.push(arr[i-1])
  //       i++
  //     }
  //     if(arr[i]==='--double-prev' && i===0){
  //       // newArr.push(arr[i-1])
  //       i++
  //     }
  //     if(arr[i]==[undefined]){
  //       i++
  //     }
  //   newArr.push(arr[i])
  // }
  // console.log(aqwe,newArr)
  // return newArr

}



//  transform([1, 2, 3, '--double-prev', 4, 5]) 
//  transform([1, 2, 3, '--discard-prev', 4, 5]) 

module.exports = {
  transform
};
// node ./src/transform-array.js