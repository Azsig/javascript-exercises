const findTheOldest = function(array) {
    let Oldest = '';
    let personAge = 0;
    for (let i in array){
        let tempAge = getAge(array[i].yearOfBirth, array[i].yearOfDeath);
        if(tempAge > personAge) {
            personAge = tempAge;
            Oldest = array[i];
        }
    }
    return Oldest;
};

function getAge(birth, death){
    let age = 0;
    if(!death){
        age = new Date().getFullYear() - birth;
    }
    else age = death - birth;

    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
