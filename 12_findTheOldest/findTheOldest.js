const findTheOldest = function(array) {
    let result = [0, 0];
    for(const person of array){
        let age = findAge(person.yearOfBirth, person.yearOfDeath);
        if(age > result[0]) result = [age, person];
    }

    return result[1];

    function findAge(yearOfBirth, yearOfDeath = 2022){
        return yearOfDeath-yearOfBirth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
