const caesar = function(string, shift) {
    code = string.split('').map(char => char.charCodeAt());
    shiftedCode = code.map(char => shiftChar(char, shift)).map(char => String.fromCharCode(char)).join("");
    return shiftedCode;

    function shiftChar(char, shift){
        const type = char => char < 97 ? 65 : 97;
        if((char <= 90 && char >= 65) || (char >= 97 && char <= 122 )){
            let charType = type(char);
            char = char + shift;
            while(char < charType) char += 26;
            while(char >= charType+25) char -= 26;
        }
        return char;
    }
};

// Do not edit below this line
module.exports = caesar;
