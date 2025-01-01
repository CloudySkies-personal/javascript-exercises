const removeFromArray = function(array, ...numbers) {
    for (number of numbers){
        let i = 0;
        while (i < array.length){
            if (array[i] === number){
                array.splice(i,1)
            } else {
                i++
            } 
        }
    }
    return (array)
};
console.log(removeFromArray([1,2,3], 3))
// Do not edit below this line
module.exports = removeFromArray;
