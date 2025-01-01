const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 <0){
        return ("ERROR")
    }
    /*This function solves for the sum of all integers betweeen two given numbers
     using Gaussian Summation*/
    gaussianSum = (num1+num2)*((Math.abs(num2-num1)+1)/2)
    return gaussianSum
};

// Do not edit below this line
module.exports = sumAll;
