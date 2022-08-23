let person = {
    name: "name",
    surname: "surname",
    age: 21,
    address: {
        country: 'Ukraine',
        city: 'Kharkiv',
    }
};

function  makeObjectDeepCopy(obj){
    const copy = {};

    for(let key in obj){
        if(obj.hasOwnProperty(key)){

            if(typeof obj[key] === 'object') {
                copy[key] = makeObjectDeepCopy(obj[key]);
            }
            else{ 
                copy[key] = obj[key];
            }
        }
    }
    return copy;
}

let copyPerson = makeObjectDeepCopy(person);
console.log(person, copyPerson);