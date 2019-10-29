let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let wrongDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let safeDoorPath1 = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
let safeDoorPath2 = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let startButton = document.getElementById("start");
let currentlyPlaying = true;

startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = "Good luck!";
    currentlyPlaying = true;
    randomWrongDoorGenerator();
}

const isClicked = door => {
    if (door.src === closedDoorPath) {
       return false
    } else {
       return true
    }
}

const isWrongDoor = door => {
    if (door.src === wrongDoorPath) {
        return true
     } else {
        return false
     }
}

const playDoor = door => {
    numClosedDoors--;
    if (numClosedDoors === 0){
        gameOver("win")
    } else if (isWrongDoor(door)) {
        gameOver()
    }
}

const randomWrongDoorGenerator = () => {
    const wrongDoor = Math.floor(numClosedDoors * Math.random());
    if (wrongDoor === 0) {
        openDoor1 = wrongDoorPath;
        openDoor2 = safeDoorPath1;
        openDoor3 = safeDoorPath2;
    } else if (wrongDoor === 1) {
        openDoor2 = wrongDoorPath;
        openDoor1 = safeDoorPath2;
        openDoor3 = safeDoorPath1;
    } else {
        openDoor3 = wrongDoorPath;
        openDoor2 = safeDoorPath2;
        openDoor1 = safeDoorPath1;
    }
}

doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying){
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying){
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying){
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

const gameOver = status => {
    if (status === "win"){
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = "You lost.. Play again?";
        currentlyPlaying = false;
    }
}

startRound();