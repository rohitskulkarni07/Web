const removeFromArray = function (...args) {
    const arr = args[0];
    return arr.filter(val=> !args.includes(val));
//   for (let i = 0; i < args.length; i++) {
//     let index = arr.indexOf(args[i]);
//     if(index > -1) {
//         arr.splice(index, 1);
//     }
//   }
//   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
