const removeFromArray = function(arr, val1, val2, val3, val4) {
    if(isNaN(val2)){
        let result = arr.filter(a => a !== val1);
        return result;
    }
    let result = arr.filter(a => a !== val1 && a !== val2 && a !== val3 && a !== val4);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
