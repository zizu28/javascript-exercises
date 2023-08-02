const fibonacci = function(num) {
    if(num < 0) return 'OOPS'
    const fibs = [0, 1]
    for(let i = 1; i < num; i++){
        fibs.push(fibs[i] + fibs[i - 1])
    }
    return fibs[num]
};

// Do not edit below this line
module.exports = fibonacci;
