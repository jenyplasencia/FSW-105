var readlineSync = require('readline-sync');
console.log("\033[2J\033[0f");

// What is player's name?
const playerName = readlineSync.question(`What is your name?` + ` `);
console.log('Hi ' + playerName + '!');

const welcome = `Welcome to the Ultimate Game ${playerName}!`;// welcome message
console.log(`${welcome}`);
console.log("Are you ready? Lets Start the game!!");

const enemies = ['Lord Dark', 'Queen Mud', 'Princess Darkness', 'Dannon Poison'];// enemies
console.log(`${playerName}, meet your Enemies: ${enemies}`);
const treasure = ['Water', 'Armor', 'Shield', 'Health Postion']; 
let prize = 'trophy';
let playerLive = 40; 
const options = ['Exit', 'Print', 'Walk'];
let pickup = treasure[Math.floor(Math.random() * treasure.length)];
let pickPrice = prize[Math.floor(Math.random() * prize.length)];

let getNewRandomValue = function(){
    let a = (Math.floor(Math.random() * 100));
    return a;
}
let getEnemy = function(){
    let tempEnemy = getNewRandomValue();
    if(tempEnemy < 25){
        return enemies[0];
    }
    if(tempEnemy > 26 && tempEnemy < 51){
    return enemies[1];
    }
    if(tempEnemy > 50 && tempEnemy < 75){
        return enemies[2];
    }
    if(tempEnemy > 74 && tempEnemy < 100){
        return enemies[3];
    }
}

// lets start the game!
while(true){
    const attackPower = getNewRandomValue();
    let enemiesHealth = 40;
    const enemiesPower = getNewRandomValue();
    console.log('Your options are:')
    const index = readlineSync.keyInSelect(options, `What option will you choose?`);

    if(options[index] == 'Exit'){
        return playerLive == 0;
    }
    else if(options[index] == 'Print'){
        console.log("\033[2J\033[0f");
        console.log(`${playerName} You have ${playerLive} points. \n\nHere is the inventory: ${treasure}`);  
    }
    else if(options[index]== 'Walk'){

        let walKey = getNewRandomValue();
        
            console.log('You are Walking');

        if(walKey <= 33){
            console.log("\033[2J\033[0f");
            enemy = getEnemy();
            console.log(enemy);
            console.log(enemy +" " +  "showed up... Oh nooo!!");
            while(playerLive !=0 && enemiesHealth !=0){
                let user = readlineSync.question(`What do you want to do? Press r to Run, Press a to attack:` + ` `);
                        if(user == 'r'){
                            let run = getNewRandomValue();
                            if(run < 51){
                                console.log(enemy + ` ` + `just attacked you using` + ` ` + enemiesPower);
                                playerLive -= enemiesPower;
    
                                if(playerLive <= 0){
                                    console.log(enemy + ` ` + `just killed your 40 points using` + ` ` + enemiesPower);
                                    console.log('Sorry, You just die!... Bye, Bye')
                                    break;
                                }
                            }else {
                                console.log('You runaway!');

                            }
                           
                        }
                        if(user == 'a'){
                            enemiesHealth -= attackPower;
                            console.log(`You just attacked` + ` ` + enemy + ` ` + `using` + ` ` + attackPower);
                            playerLive -= enemiesPower;
                            console.log(enemy + ` ` + `just attacked you using` + ` ` + enemiesPower + ` ` + attackPower);
                            if(enemiesHealth <= 0){
                                console.log(`You just killed` + ` ` + enemy + `\n`+enemy + ` ` + `left` )
                                console.log(` you win a ${prize}`)  
                                break;
                            } 
                            if(playerLive <= 0){
                                console.log(' Oh nooo! You just Die');
                                break;

                            }
                        }                   
            }  

            
        }    
    }
    
    
}





