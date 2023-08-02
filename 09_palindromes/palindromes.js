const palindromes = function(str) {
    let palWord = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    return palWord.split("").reverse().join("") === palWord
}

// Do not edit below this line
module.exports = palindromes
