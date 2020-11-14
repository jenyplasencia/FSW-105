//Create a new JavaScript file and put these two arrays at the beginning.
// You will write a single function that performs many operations on them.

var fruit = ['banana', 'apple', 'orange','watermelon'];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

 // # 1. Remove the last Item from the vegetable array.
function tryFunction(){
    vegetables.pop();
    vegetables.push(vegetables.length);
    fruit.shift();
    var x = fruit.indexOf('orange');
    fruit.push(x);
    var food = fruit.concat(vegetables);
    food.splice(4, 2);
    food.reverse();
    var foodString = food.toString();
    
    console.log(foodString)
}
tryFunction()
