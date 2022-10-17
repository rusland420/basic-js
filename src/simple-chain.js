const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
arr:[],
  getLength() {
    // throw new NotImplementedError('Not implemented');
  return  arr.length()
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
   this.arr.push(`( ${value} )`);

    return this
  },
  removeLink(position) {
    if (this.arr[position - 1] === undefined){
			this.arr = [];
         throw new Error ("You can't remove incorrect link!")
      }
      this.arr.splice(position - 1,1);
      return this
  },
  reverseChain() {
    this.arr.reverse();

    return this
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
    return res
  }
};



module.exports = {
  chainMaker
};
