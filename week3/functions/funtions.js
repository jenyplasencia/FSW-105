
/*
//Q2.Function will accept tree numbers as parameters and return the largest of those.

function compareNumbers(numb1, numb2, numb3){
    console.log(Math.max(numb1, numb2, numb3));
}
     compareNumbers(10, 26, 4);
*/

// Q4. function compare if String is less than or equal to twenty characters long.
function howLongIsString(str){
    if (str.length <= 20){

        console.log(str + str);
        return str + str;

        
    }else if (str.length >= 20){

        var x = str.length;
        var res = str.slice(-x, (x / 2));
         console.log(res);
     
    }
    
}

howLongIsString('I think functions is a very interesting subject')







