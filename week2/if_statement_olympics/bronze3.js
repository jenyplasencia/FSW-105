// THIS IS THE TENARY CODE

/* var person = { 
    name: "Bobby", 
    age: 12,
};    

// Is allowed into the movies if name start with "B" and they are older that 18.
var compare = (firstLetter === "B" && person.age > 18) ? "Is allowed to go to the movie because, Name start with 'B'is and is 18 years old.": "is not allowed to go to the movie";
console.log(person.name + " " + compare);*/

//Using If statement.....
                             // THIS IS IF ELSE CODE
var person = {
    name: "Bobby",
    age: 12,
};

// Is allowed into the movies if name start with "B" and is older that 18.
var firstLetter = person.name.charAt(0);
if (firstLetter === "B" && person.age > 18){
    console.log((person.name) + ' ' + "Is allowed to go to the movie because, Name start with 'B'is and is 18 years old.");
}
else 
{
    console.log((person.name) + ' ' + "Is not allowed to go to the movie. His name start with 'B'but is not old enough."); 
}
