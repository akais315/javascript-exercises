const getTheTitles = function(array) {
    let result = [];
    for(const book of array){
        result.push(book.title);
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
