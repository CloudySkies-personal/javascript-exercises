const removeFromArray = function(array, ...numbers) {
    for (number of numbers){
        const index = array.indexOf(number)
        array.splice(index,1)
    };
    return (array)
};
console.log(removeFromArray([1,2,3], 3))
// Do not edit below this line
module.exports = removeFromArray;
