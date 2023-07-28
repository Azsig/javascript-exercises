const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * (5/9);
  celsius = Math.round(celsius*10)/10;
  return celsius;
};

const convertToFahrenheit = function(temp) {
  let farenheit = temp * (9/5) + 32;
  farenheit = Math.round(farenheit*10)/10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
