const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 12, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if(date===undefined){
    return "Unable to determine the time of year!";
  }
 if (typeof date.getMonth !== 'function') {
    throw new Error("Invalid date!");
  }
  if ( Object.keys(date).length!=0) {

    throw new Error("Invalid date!");
  }
const mon= date.getMonth();
if(mon>=2 && mon <=4){
  return 'spring'
   }
if(mon>=5 && mon<=7){
  return 'summer'
  }
if(mon>=8 && mon<=10){
return 'autumn'
  }
  else{

    return 'winter'
  }


}
// getSeason(new Date(2020, 12, 31)) 
module.exports = {
  getSeason
};
