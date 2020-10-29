// THIS IS THE TENARY CODE: Is allowed into the movies if name start with "B"

/* var person = { 
    name: "Bobby", 
    age: 12,
    };
    
var firstLetter = person.name.charAt(0);
var compare = (firstLetter === "B") ? "is allowed to go to the movie just because name starts with 'B'" : "is not allowed to go to the movie";
console.log(person.name + " " + compare);
*/

// THIS IS IF ELSE CODE
var person = {
    name: "Bobby",
    age: 12,
    };

// Is allowed into the movies if name start with "B"
var firstLetter = person.name.charAt(0);
if (firstLetter === "B"){
console.log((person.name) + ' ' + "is allowed to go to the movie just because name starts with 'B'");
}
else
{
 console.log((person.name) + ' ' + "is not allowed to go to the movie.");   
}