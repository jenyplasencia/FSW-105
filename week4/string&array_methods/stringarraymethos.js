/*
// #1. Function will return any given string into all caps and then in lower case.
function theString(str){
    theUpperString = str.toUpperCase();
    theLowerString = theUpperString.toLowerCase();
    var toguether= theUpperString.concat(theLowerString);
    console.log(toguether);
   
}   

 theString('I think functions is a very interesting subject')

 */
/*
// #2. Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

function halfLength(str){
    var LengthHalf = ((str.replace(/\s/g,'')).length) / 2;
    var res =  Math.floor(LengthHalf);
    console.log(res);
   
}   

halfLength('I think functions is a very interesting subject')
*/

/*

//#3 Make a function that uses slice() and the other functions you've written to return the first half of the string.

function myString(str){
    var LengthOfString = str.length;
        var res = str.replace(/ /g,'').slice(-LengthOfString, (LengthOfString / 2));
         console.log(res);
}   
    
    myString('I think functions is a very interesting subject')
*/

/*
//#4 Make a function that takes a string and returns that string where the first half is capitalized, 
//and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)


function myString(str){
    var LengthOfString = str.length;
    if (LengthOfString % 2 !== 0){
        var upString = str.toUpperCase().slice(-LengthOfString, (LengthOfString / 2));
        var lowString = str.toLowerCase().slice((LengthOfString / 2), LengthOfString );
        console.log(upString + lowString );
    }
    else{
    var upString = str.toUpperCase().slice(-LengthOfString, (LengthOfString / 2));
        var lowString = str.toLowerCase().slice((LengthOfString / 2), LengthOfString );
        console.log(upString + lowString );
    }
  

}
            myString('this is a very interesting subject') 
*/

/*
function capiWords(str){
    return str.replace(/\w\S*g
    function  tt(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
    var result = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(result); *
    
    

    capiWords('hello world... this is me!') */
    