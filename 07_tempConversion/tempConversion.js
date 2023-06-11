const convertToCelsius = function(fahrenheit) {
  if(fahrenheit === 32)
    return 0;
  let temp = (fahrenheit - 32) * (5 /9);
  return Math.round(temp * 10)/10;
  
};

const convertToFahrenheit = function(celsius) {
  if(celsius === 0)
    return 32;
  let temp = (celsius * (9 / 5)) + 32;
  return Math.round(temp * 10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
