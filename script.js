let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let clickerbutton = document.getElementById("button");

let curr = document.getElementById("curr");
let max = document.getElementById("max");

let door1Clicked = false;
let door2Clicked = false;
let door3Clicked = false;
 
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let normalDoor1 = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let normalDoor2 = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoor = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let door1;
let door2;
let door3;

let closeddoors = 3;
let chosenDoor;
let gameover = false;
let currStreak = 0;
let maxStreak = 0;


function doorpicker () {
    let chosenDoor = Math.floor(Math.random()*3);
    console.log(chosenDoor);
    let coinflip = Math.floor(Math.random());
    if (chosenDoor == 0) {
        door1 = 'bot';
        if (coinflip == 0) {
            door2 = 'one';
            door3 = 'two';
        } else {
            door2 = 'two';
            door3 = 'one';
        }
    }
    if (chosenDoor == 1) {
        door2 = 'bot';
        if (coinflip == 0) {
            door1 = 'one';
            door3 = 'two';

        } else {
            door1 = 'two';
            door3 = 'one';
        }
    }
    if (chosenDoor == 2) {
        door3 = 'bot';
        if (coinflip == 0) {
            door1 = 'one';
            door2 = 'two';

        } else {
            door1 = 'two';
            door2 = 'one';
        }
    }     
}

doorImage1.onclick = function() {
    if (!door1Clicked) {
        door1Clicked = true;
        if(door1 == 'bot') {
            gameover = true;
            closeddoors --;
            doorImage1.src = botDoorPath;
            door2Clicked = true;
            door3Clicked = true;
        } else if (door1 == 'one') {
            doorImage1.src = normalDoor1;
            closeddoors --;
        } else {
            doorImage1.src = normalDoor2;
            closeddoors --;
        }
        gameControl();
    }

}

doorImage2.onclick = function() {
    if (!door2Clicked) {
        door2Clicked = true;
        if(door2 == 'bot') {
            gameover = true;
            closeddoors --;
            doorImage2.src = botDoorPath;
            door1Clicked = true;
            door3Clicked = true;
        } else if (door2 == 'one') {
            doorImage2.src = normalDoor1;
            closeddoors --;
        } else {
            doorImage2.src = normalDoor2;
            closeddoors --;
        }
        gameControl();
    }
}

doorImage3.onclick = function() {
    if (!door3Clicked) {
        door3Clicked = true;
        if(door3 == 'bot') {
            gameover = true;
            closeddoors --;
            doorImage3.src = botDoorPath;
            door1Clicked = true;
            door2Clicked = true;
        } else if (door3 == 'one') {
            doorImage3.src = normalDoor1;
            closeddoors --;
        } else {
            doorImage3.src = normalDoor2;
            closeddoors --;
        }
        gameControl();
    }
}

function gameControl() {
    if (gameover == true) {
        clickerbutton.innerHTML = "Game Over, Play Again?";
        curr.innerHTML = "Current Streak: 0";
        if (currStreak > maxStreak) {
            maxStreak = currStreak;
            max.innerHTML = "Max Streak: " + maxStreak; 
        }
        clickerbutton.onclick = function () {
            doorpicker();
            reset();
        }
        if (closeddoors == 0) {
            currStreak ++;
            curr.innerHTML = "Current Streak: " + currStreak;
            if (currStreak > maxStreak) {
                maxStreak = currStreak;
                max.innerHTML = "Max Streak: " + maxStreak; 
            }
            clickerbutton.innerHTML = "You WIN!!!";
            clickerbutton.onclick = function () {
                doorpicker();
                reset();
            }
        }
    }
    else {
        clickerbutton.onclick = "Good Luck!";
    } 

}

function reset() {
    gameover = false;
    closeddoors = 3;
    clickerbutton.innerHTML = "Good Luck!"
    doorImage1.src = closedDoor;
    doorImage2.src = closedDoor;
    doorImage3.src = closedDoor;
    door1Clicked = false;
    door2Clicked = false;
    door3Clicked = false;
}

doorpicker ();

