const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members) {
  // throw new NotImplementedError('Not implemented');
  let arr=[]
  let str=[]
  if( !Array.isArray(members)){
    return false
  }

 members.forEach(elem =>{
  if(typeof elem==="string"){
    arr.push(elem)
  } 
})

let  memSpace = arr.map(item => item.replace(/ /g,''))
memSpace.forEach(elem =>{
  if(typeof elem==="string"){
    str.push(elem[0])
  }
})

let sortTeam= str.sort(function (a,b){
  return a.localeCompare(b);
})

let res = sortTeam.toString().replace(/,/g,'').toUpperCase()
console.log(res)
return res
}
// createDreamTeam(['  Matt', 'Ann', 'Dmitry', 'Max'])
//  createDreamTeam(['    Olivia', 1111, 'Lily', 'Oscar', true, null])

module.exports = {
  createDreamTeam
};
