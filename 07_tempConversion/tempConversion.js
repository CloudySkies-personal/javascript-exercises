const celToFahrFixedConstant = 9/5
const fahrToCelFixedConstant = (1/(9/5))

const convertToCelsius = function(tempToConvert) {
    return (tempToConvert - 32) * (fahrToCelFixedConstant)
};

const convertToFahrenheit = function(tempToConvert) {
    return ((celToFahrFixedConstant * tempToConvert) + 32) 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
