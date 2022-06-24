const sumAll = function(start, end) {
    if(start < 0 || end < 0){ return "ERROR"}
    if(Number(start) !== start || Number(end) !== end){return "ERROR"}
    let answer = 0
    if(start <= end){
        for(let i = start; i <= end; i++){
            answer += i;
        }
    } else {
        for(let i = start; i >= end; i--){
            answer += i;
        }
    }
    return answer
};

// Do not edit below this line
module.exports = sumAll;
