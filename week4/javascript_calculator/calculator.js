
var readlineSync = require('readline-sync');
var num1 = readlineSync.questionInt("Type your First Number:");
var num2 = readlineSync.questionInt("Type your Second Number:");
 var mathOpera =  readlineSync.question("What math Operation? ... Addition: add  substraction: subs  Multiplication: mul  Division: div    ");

if (mathOpera.localeCompare("add") === 0){
    addiTion(num1, num2)

} else if (mathOpera.localeCompare("subs") === 0){
    
    subs(num1, num2)

} else if (mathOpera.localeCompare("mul") === 0 ){
    mulTiply(num1, num2)

} else if (mathOpera.localeCompare("div") === 0){
    divide(num1, num2)
}

function addiTion(num1, num2){
    var result = num1 + num2;
    console.log('The sum of' + ' ' + num1 + ' ' + 'and'+ ' '+ num2 + ' ' + 'is:' + ' ' + result );
}

function subs(num1, num2){
    var result = num1 - num2;
    console.log('The substraction of' + ' ' + num1 + ' ' + 'and'+ ' '+ num2 + ' ' + 'is:' + ' ' + result );
}
    
function mulTiply(num1, num2){
    var result = num1 * num2;
    console.log('The product of' + ' ' + num1 + ' ' + 'and'+ ' '+ num2 + ' ' + 'is:' + ' ' + result );
}

function divide(num1, num2){
    var result = num1 / num2;
    console.log('The result of devide' + ' ' + num1 + ' ' + 'and'+ ' '+ num2 + ' ' + 'is:' + ' ' + result );
}