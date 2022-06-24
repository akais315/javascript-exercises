const palindromes = function (string) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~/ ]/g;
    string = string.replace(regex,'').toLowerCase();
    return string.split('').reverse().join('') === string
};

// Do not edit below this line
module.exports = palindromes;
