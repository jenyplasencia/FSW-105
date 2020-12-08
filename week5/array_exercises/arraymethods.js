//-------SECTION A-----------//
// #1

const arr = [3, 6, 8, 2]
function fiveAndGreaterOnly(arr){

const result = arr.filter(num => num >= 5)
console.log(result)
}
fiveAndGreaterOnly(arr)



//#2
const arr = [3, 6, 8, 2]
function evensOnly(arr){

    const result = arr.filter(num => num % 2 ===0)
    console.log(result)
    }
    envensOnly(arr)



//Extra Credit.

function ofAge(arr){
const result = arr.filter(arr => arr.age >= 17)
console.log(result)
}
console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
{name: "Eric Jones", age: 2},
{name: "Paris Hilton", age: 5},
{name: "Kayne West", age: 16},
{name: "Bob Zirrol", age: 100}
]));


//----------- SECTION B -----------

//#1 using .map()


const arr = [2, 5, 100]

function doubleNumbers(arr){
    const result = arr.map(num => num * 2)
    console.log(result)
}
doubleNumbers(arr)



//#2 
const arr = [2, 5, 100]

function stringItUp(arr){
    const newArr = arr.map(arr => arr.toString()) 

    console.log(newArr)
}

stringItUp(arr)



//#3

const arr = ['john', 'JACOB', 'jinGleHeimer', 'smithdt']
   
function capitalizeNames(arr){
    const newArray = arr.map(arr => arr.toLowerCase()) 
    const capiTal = newArray.map(name => name.charAt(0).toUpperCase() + name.slice(1))


    console.log(capiTal)
}
capitalizeNames(arr)



// EXTRA CREDIT
//#1
const arr = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Zirrol", age: 100}
]
function namesOnly(arr){
const result = arr.map(arr => arr.name)

console.log(result);
};
namesOnly(arr)



//EXTRA CREDIT #2

const arr =  [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Zirrol", age: 100}
]
function makeStrings(arr){
const result = arr.map(function(user){
    if (user.age >= 17){
    return user.name + " " + "can go to The Matrix"
    } else {
         return user.name + " " + "is under age!"
    }
})

console.log(result)
}
``
makeStrings(arr)


// --------- SECTION C -------------
// use .reduce()


//#1
const arr = [1, 2, 3]
function total(arr){
    const sumTotal = arr.reduce(function(final, num){
        final += num
        return final
    })
        
        console.log(sumTotal)
        
}

total(arr)


// #2
let x=[];
const arr = [1, 2, 3]
function stringConcat(arr){
  
    x = arr.toString().replace(/,/g, ''); 
    console.log(x);
    

}

stringConcat(arr)


////// EXTRA CREDIT 2 Given an Array of arrays, flatten them into a single array

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];   
    arrays = arrays.reduce(function(a, b){
      return  a.concat(b);    
   }, []); 
   console.log (arrays);


// *************SECTION D **********

//#1
const arr = [1, 3, 5, 2, 90, 20]

function greatestToLeasst(arr){
    arr.sort((a, b) => a - b)
    console.log(arr)
}
    greatestToLeasst(arr)


//#2

const arr = [1, 3, 5, 2, 90, 20]

function greatestToLeasst(arr){
        arr.sort((a, b) => b - a)
        console.log(arr)
    }
        greatestToLeasst(arr)


// #3

const arr = ["dog", "wolf", "by", "family", "eaten"]

function lengthSort(arr){
    arr.sort((a,b) => a.length - b.length)
    console.log(arr)

}
    lengthSort(arr)


// EXTRA CREDIT

const arr = ["dog", "wolf", "by", "family", "eaten"]

function alphabetical(arr){
    arr.sort()
    
    console.log(arr)
}
alphabetical(arr)
