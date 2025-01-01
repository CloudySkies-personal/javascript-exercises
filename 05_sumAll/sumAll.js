const sumAll = function(num1, num2) {
    /*This function solves for the sum of all integers betweeen two given numbers
     using Gaussian Summation*/
    gaussianSum = (num1+num2)*((Math.abs(num2-num1)+1)/2)
    return gaussianSum
};

// Do not edit below this line
module.exports = sumAll;
