const reverseString = function(string) {
    let stringToArray = string.split("");
    let reverseArray = stringToArray.reverse();
    let stringReversed = reverseArray.join("");
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
