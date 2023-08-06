const findTheOldest = function(people) {
    return people.reduce((updatedPerson, currentPerson) => {
        const oldestPerson = getAge(updatedPerson.yearOfBirth, updatedPerson.yearOfDeath)
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        return oldestPerson > currentAge ? updatedPerson : currentPerson
    })
};

const getAge = (a,b) => {
    if(!b){
        b = new Date().getFullYear()
    }
    return b - a
}

// Do not edit below this line
module.exports = findTheOldest;
