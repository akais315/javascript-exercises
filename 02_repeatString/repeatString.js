const repeatString = function(string, num) {
    let text = ""
    if (num < 0) return "ERROR";
    for(let i = num; i > 0; i--){
        text += string;
    }
    return text
};

// Do not edit below this line
module.exports = repeatString;
