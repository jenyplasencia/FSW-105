var readlineSync = require('readline-sync');

// What is player's name?

const userName = readlineSync.question('What is your name? ');

console.log('Hi ' + userName + '!');
const welcome = `Welcome to the Escape Room ${userName}!`;
console.log(`${welcome}`);

// is the player alive and also what about the key...
let alive = true;
let key = false;
while (alive == true){
    const menu = readlineSync.keyIn('Press 1 to Put hand in hole. \n Press 2 to Find the key, or\n Press 3 to Open de door', {limit: '$<1-3>'}); // range of '1' to '3'
    
    // creating menu
    if(menu == 1){ // Player will die
        console.log(`OOOPS!!! sorry ${userName} but you just die!`);
        alive = false;
    }
    else if(menu == 2 && key == true){ // for the player already has the key but chose again this option.
        console.log(`${userName}, you already got the key, please move forward to the next step!`);
    } 
    
    else if(menu == 2 && key == false){ // player just chose this option for first time.
        console.log(`Congratulations!!! ${userName}, you just found the key!`);
        key = true;
    }
    else if(menu == 3 && key == false){ // player never found the key.
        console.log(`${userName}, you need to find the key first, go to option 2!`);
    }
    else if(menu == 3 && key == true){ // player found the key.
        console.log(`Congratulations!!! ${userName}, You succsessfuly finish the game... You Winn!!`);   
        alive = false;


    }
}
