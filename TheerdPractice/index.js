var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = 60;

/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  minutes+=interval;

  hours+=Math.floor(minutes/MINUTES_PER_DAY);

  hours%=HOURS_PER_DAY;
  minutes%=MINUTES_PER_DAY;

  if(hours<10){hours="0"+hours;}
  if(minutes<10){minutes="0"+minutes;}

  return (hours+":"+minutes);
  
};
