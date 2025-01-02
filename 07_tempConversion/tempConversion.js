const celToFahrFixedConstant = 9/5
const fahrToCelFixedConstant = (1/(9/5))

const convertToCelsius = function(tempToConvert) {
    
  const unroundedConversion = (tempToConvert - 32) * (fahrToCelFixedConstant)
  const roundedConversion = Number(unroundedConversion.toFixed(1))
  return (roundedConversion)
};

const convertToFahrenheit = function(tempToConvert) {
  const unroundedConversion = ((celToFahrFixedConstant * tempToConvert) + 32) 
  const roundedConversion = Number(unroundedConversion.toFixed(1))
  return (roundedConversion)
}; 


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
