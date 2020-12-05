
/*
const ownersName = 'John';
const age = 101;
let petObjects= ['cat', 'dog'];
let pets = ['flufly', 'spot'];


function runForLoop(pets){
    for(let i = 0; i < pets.length; i ++){
        let pet = {type: pets[i], name: pets};
    
        if (pets[i].value ===  'cat'){
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
*/

/*
//#2 Rewrite this .map() using an arrow function:

const carrots = ['bright orange', 'ripe', 'rotten']

const result = carrots.map(function(carrot){ 
    return {type: "carrot", name: carrot}
})

console.log(result)
*/

const carrots = ['bright orange', 'ripe', 'rotten']

const 
function mapVegetables(arr){
    return arr.map(function(carrot){
        return {type: 'carrot', name: carrot}
    })
    
}
console.log(mapVegetables)

/*
const carrots = ['bright orange', 'ripe', 'rotten']
let g = {type: 'carrot', name: carrot}
const result = carrots.map(arr => g)
console.log(result)
*/
  /*  
//////////////////
    const result = arr.map(num => num + 10)

console.log(result)
}*/

