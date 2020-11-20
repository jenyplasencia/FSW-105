//-------SECTION A-----------//
// #1
/*
const arr = [3, 6, 8, 2]
function fiveAndGreaterOnly(arr){

const result = arr.filter(num => num >= 5)
console.log(result)
}
fiveAndGreaterOnly(arr)
*/
/*
//#2
const arr = [3, 6, 8, 2]
function evensOnly(arr){

    const result = arr.filter(num => num % 2 ===0)
    console.log(result)
    }
    envensOnly(arr)
*/
//Extra Credit.
const arr = [{name: "Angelina Jolie", age: 80},
            {name: "Eric Jones", age: 2},
            {name: "Paris Hilton", age: 5},
            {name: "Kayne West", age: 16},
            {name: "Bob Zirrol", age: 100}
        ]
function ofAge(arr){
const result = arr.filter(arr => arr.age >= 17)
//return arr.name + " " + arr.age
console.log(result)
}
ofAge(arr)