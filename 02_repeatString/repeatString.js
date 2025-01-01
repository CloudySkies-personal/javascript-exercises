
const repeatString = function(string, num) {
   if (num < 0){
    let final_string = "ERROR"
    return (final_string)
   }
   let final_string = ""
   for (i=0; i<num; i++){
    final_string += string;
   };

   return (final_string)
};

// Do not edit below this line
module.exports = repeatString;
