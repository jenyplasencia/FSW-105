/*
//Q1. Function that accept two numbers and add  them.
function addNumbers(numb1, numb2){
    console.log(numb1 + numb2)
    return numb1 + numb2
}
// calling function addNumbers
addNumbers(15, 8);
*/


/*
//Q2.Function will accept tree numbers as parameters and return the largest of those.

function compareNumbers(numb1, numb2, numb3){
    if (numb1 > numb2 && numb1 > numb3){
         
         console.log(numb1);
         return numb1; 
    }
    else if ( numb2 > numb1 && numb2 > numb3){
        
        console.log(numb2);
        return numb2;
    }
    else if (numb3 > numb1 && numb3 > numb2){
        
        console.log(numb3);
        return numb3;
    }
}


// calling function compareNumbers...
compareNumbers(8, 6, 4);

*/

/*
//Q3 Is the number "even" or "odd?
var numb = 0;
function evenOrOdd(numb){
    if (numb % 2 === 0){
        console.log(numb + ' ' + 'is even');
        return numb + ' ' + 'is even';
    } else 
        console.log(numb + ' ' + 'is odd.');
        return numb + ' ' + 'is odd'; 

}
// calling function evenOrOdd...
evenOrOdd(35);
*/


// Q4. function compare if String is less than or equal to twenty characters long.
function howLongIsString(str){
    if (str.length <= 20){

        console.log(str + str);
        return str + str;

    }else if (str.length >= 20){

        var x = str.length;
        var halfStr = x / 2;

        for (i = 0; i <= halfStr; i++){
           console.log(str[i]);
           
        }
        return (str[i]);
    }
    
}

howLongIsString('I think functions is a very interesting subject')


 

