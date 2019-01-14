//const readline = require('readline');

const a = 1;
//a = 2;

var person = {
    owner: 'johan', 
    age: 59, 
    cars: [
        {type: 'Volvo', color: 'Svart', year: 1998}, 
        {type: 'Corvette', color: 'röd'}, 
        {type: 'BMW'}
    ]
};
//var myres = readline();


//console.log(myres);

console.log(person.cars[1].type);