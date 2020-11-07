/*var peoleWhoWantToSeeMaxFuryRoad = [
{ 
    name: "Mike",
    age:12,
    gender: "male"
}, {
    name: "Madelina",
    age: 80,
    gender: "female"
}, {
    name: "Cherryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"

}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}
]; */
/*
// Step 1: is Older than 18? Old enought || if not --> Not Old enough
oldEnough();
function oldEnough(){

    for (var i = 0; i < peoleWhoWantToSeeMaxFuryRoad.length; i ++ ){
    
         if (peoleWhoWantToSeeMaxFuryRoad[i].age >= 18){
            console.log( "Is old enough");
        } 
         else if (peoleWhoWantToSeeMaxFuryRoad[i].age < 18){
            console.log( "Is not old enough");
        }

    }

}


 console.log('*************************************************');
*/

/*
// Step 2: Personalized message "include the name"

withName();
function withName(){
   for (var i = 0; i < peoleWhoWantToSeeMaxFuryRoad.length; i ++ ){
    
        if (peoleWhoWantToSeeMaxFuryRoad[i].age >= 18){
                console.log( peoleWhoWantToSeeMaxFuryRoad[i].name + " " + "Is old enough to see Mad Max");
        } 
        else if (peoleWhoWantToSeeMaxFuryRoad[i].age < 18){
                console.log( peoleWhoWantToSeeMaxFuryRoad[i].name + " " + "Is not old enough to see Mad Max");
        }
 
    }
}
*/
    
   /*
//Step 3: Check the gender for an even more personalized message.
whithGender();
function whithGender(){ 
    for (var i = 0; i < peoleWhoWantToSeeMaxFuryRoad.length; i ++ ){
    
        if (peoleWhoWantToSeeMaxFuryRoad[i].age >= 18){
            if (peoleWhoWantToSeeMaxFuryRoad[i].gender === "female"){
                console.log( peoleWhoWantToSeeMaxFuryRoad[i].name + " " + "is old enough and She is good to see Mad Max Fury Road" );
            }
            else if (peoleWhoWantToSeeMaxFuryRoad[i].gender === "male"){
                console.log( peoleWhoWantToSeeMaxFuryRoad[i].name + " " + "is old enough, he is good to see the movie let him in" );
            }
        }
        if (peoleWhoWantToSeeMaxFuryRoad[i].age <= 18){
            if (peoleWhoWantToSeeMaxFuryRoad[i].gender === "female"){
                console.log( peoleWhoWantToSeeMaxFuryRoad[i].name + " " + "is not old enough, do not let her in" );
            }
            else if (peoleWhoWantToSeeMaxFuryRoad[i].gender === "male"){
                console.log( peoleWhoWantToSeeMaxFuryRoad[i].name + " " + "is not old enough, do not let him in" );
            }
        }
    
    }
}*/
/*
// Step 4: Iterates trough 101 numbers (from 0 - 100).If is odd console.log "(number) is an odd number", otherwise print "(number) is an even number"
hundredAdOne();
function hundredAdOne(){
    for (var i = 0; i < 101; i ++){
        if (i % 2 === 0){
            console.log( i + ' ' + 'is an Even number!');
        }
        else if (i % 2 !== 0){
            console.log( i + ' ' + 'is an Odd number!');
        }
    
    }

}*/

//EXTRA CREDIT: Toggle button. Off to star.

var lights = [
    [2, 5, 435, 4, 3],
    [1, 1, 1, 1, 3],
    [9, 3, 4, 4, 2],
]

lightsOnOff();
function lightsOnOff(){
    
    for ( var i = a; i < lights.length; i ++ ){
            for (var indx = 0; indx < lights[i].length; indx ++){
                if (indx === 5){
                    sumNumb = + lights[indx]
                }
                if(sumNub % 2 === 0){
                    console.log (lights[indx] + ' ' + 'The light is OFF')
                } 
                else {
                    console.log(lights[indx]  + ' ' +'The light is ON')
                }
     
            }   
    
    } 

}