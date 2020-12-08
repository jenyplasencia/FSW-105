
const ownersName = 'John';
const age = 101;
let petObjects= ['cat', 'dog'];
let pets = ['flufly', 'spot'];


function runForLoop(pets){
    for(let i = 0; i < pets.length; i ++){
        let pet = {type: pets[i], name: pets};
    
        if (pets[i] ===  'cat'){
            name = 'flufly';
        }else {
            name = 'spot';

        }
        pets.name = name;
        petObjects.push(pets.name);

        console.log('pet name: ', name)
            
    }
        console.log('man name: ', ownersName)  
        console.log(petObjects);

        return petObjects;
        
}
        runForLoop(['cat', 'dog'])
console.log("************************");



//#2 Rewrite this .map() using an arrow function:

const carrots = ['bright orange', 'ripe', 'rotten']

mapVegetables = arr =>{
return arr.map(function(carrot){
    return {type:'carrot', name: carrot}
});

}
console.log( mapVegetables([carrots]));
console.log("************************");



//#3 Re-write .filter() using an arrow function:

const people = [
{name: "Princes Peach",
friendly: false},
{name: "Luigi",
friendly: true},
{name: "Mario",
friendly: true},
{name: "Browser",
friendly: false},
]

filterForFriendly = arr =>{
    return people.filter(function(person){
        return person.friendly
    })

}
console.log( filterForFriendly());
console.log("************************");



//#4 
doMathSum =(a, b) => a + b
console.log( doMathSum(4, 6));
console.log("************************");

var produceProduct = (a, b) => a + b
console.log( produceProduct (4, 5));
console.log("************************");



//#5 & #6
   
let firstName = "Jane";
let lastName = "Doe";
let age = 100;

const printString = (firstName = "jane", lastName= "Doe", age= 40) => {
       
    console.log(`Hi ${firstName} ${lastName}, how does it feels to be ${age}?`);
    return firstName, lastName, age;
}
printString("Kat", "Stark", "40");
console.log("************************");


//#7
const animals = [
    {
        type: 'dog',
        name: 'theodore'
    },
    {
        type: 'cat',
        name: 'whiskers'
    },

    {
        type: 'pig',
        name: 'piglet'
    },
    {
        type: 'dog',
        name: 'sparky'
    }
];

const filterForDogs = arr => animals.forEach.filter(animal.value === "dog"); 
    console.log(true)
    return true;
    console.log(filterForDogs);
console.log("************************");


// #8
const LocationAndName = (name, location) => {
       
    console.log(`Hi ${name}! \n \nWelcome to hawaii. \n \nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`);
    return name, location;
}
LocationAndName("Janice", "Hawaii");
console.log("************************");



    
