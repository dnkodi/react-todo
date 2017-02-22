var moment = require('moment');

console.log("Current Time", moment().format());

console.log("Current Time in unix", moment().unix());

console.log("Current Time", moment().format('MMM D, YY @ h:mm a'));

console.log("Current Time", moment().format('MMMM Do, YYYY @ hh:mm A'));
