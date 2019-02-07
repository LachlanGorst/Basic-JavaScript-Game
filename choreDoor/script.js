/* Global Variables */

const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/"
	+ "chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/"
	+ "chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/"
	+ "chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/"
	+ "chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
const startButton = document.querySelector('#start');

/* Functions */

const main = () => {
	startRound();
}

const randomChoreDoorGenerator = () => {
	const choreDoor = Math.floor(Math.random() * numClosedDoors);
	if(choreDoor === 0){
		openDoor1 = botDoorPath;
		openDoor2 = beachDoorPath;
		openDoor3 = spaceDoorPath;
	}else if(choreDoor === 1){
		openDoor2 = botDoorPath;
		openDoor1 = beachDoorPath;
		openDoor3 = spaceDoorPath;
	}else{
		openDoor3 = botDoorPath;
		openDoor2 = beachDoorPath;
		openDoor1 = spaceDoorPath;
	}
}

const isBot = (door) => {
	if(door.src === botDoorPath){
		return true;
	}else{
		return false;
	}
}

const isClicked = (door) => {
	if(door === closedDoorPath){
		return false;
	}else{
		return true;
	}
}

const playDoor = (door) => {
	numClosedDoors--;
	if(numClosedDoors === 0){
		gameOver('win');
	}else if(isBot(door)){
		gameOver();
	}
}

const gameOver = (status) => {
	if(status === 'win'){
		startButton.innerHTML = 'You win! Play again?';
	}else{
		startButton.innerHTML = 'Game over! Play again?';
	}
	currentlyPlaying = false;
}

const startRound = () => {
	doorImage1.src = closedDoorPath;
	doorImage2.src = closedDoorPath;
	doorImage3.src = closedDoorPath;
	numClosedDoors = 3;
	startButton.innerHTML = 'Good Luck!';
	currentlyPlaying = true;
	randomChoreDoorGenerator();
}

/* Event Listeners */

door1.onclick = () => {
	if(!isClicked(doorImage1.src) && currentlyPlaying){
		doorImage1.src = openDoor1;
		playDoor(door1);
	}
}
door2.onclick = () => {
	if(!isClicked(doorImage2.src) && currentlyPlaying){
		doorImage2.src = openDoor2;
		playDoor(door2);
	}
}
door3.onclick = () => {
	if(!isClicked(doorImage3.src) && currentlyPlaying){
		doorImage3.src = openDoor3;
		playDoor(door3);
	}
}

startButton.onclick = () => {
	if(!currentlyPlaying){
		startRound();
	}
}

/* Run Program */

main();
