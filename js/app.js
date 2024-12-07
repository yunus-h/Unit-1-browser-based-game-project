
// Chicken Crosses Roads by Yunus Herman
/*-------------------------------- Constants --------------------------------*/

const chickenAtHome = document.querySelector('#atHome');
// console.log(chickenAtHome);

const messageEl = document.querySelector('#message');
// console.log(messageEl);

const destinationImage = document.querySelector('.destination');
// console.log(destinationImage);

const chickenSaid = document.querySelector('#chickenSaid');

const chickenCrossElements = document.querySelectorAll('.chickenCross');
// console.log(chickenCrossElements);

const road1Elements = document.querySelectorAll('.road1');
// console.log(road1Elements);

const road2Elements = document.querySelectorAll('.road2');
// console.log(road2Elements);

const road3Elements = document.querySelectorAll('.road3');
// console.log(road3Elements);

const road4Elements = document.querySelectorAll('.road4');
// console.log(road4Elements);

const road5Elements = document.querySelectorAll('.road5');
// console.log(road5Elements);

const playAgainButton = document.querySelector('#play-again-button');

/*---------------------------- Variables (state) ----------------------------*/

let stopCarsArray = [];

const chickenPlayer = '<img src="./images/start-chicken.jpg" alt="player">';
const runningChicken = '<img src="./images/running-chicken.jpg" alt="running-chicken">';
const deadChicken ='<img src="./images/dead-chicken.png" alt="dead-chicken">';
const winnerChicken = '<img src="./images/winner-chicken.png" alt="winner-chicken">';
const sadWifeChicken = '<img src="./images/sad-wife-chicken.png" alt="sad-wife-chicken">';
const finishLine = '<img src="./images/finish.jpg" alt="finish">';
const chickenCoop = '<img src="./images/chickencoop.jpg" alt="chickenCoop">';


const redTruckRight = '<img src="./images/red-truck-right.png" alt="red-truck-right">';
const redTruckLeft = '<img src="./images/red-truck-left.png" alt="red-truck-left">';

const redCarRight = '<img src="./images/red-car-right.png" alt="red-car-right">';
const redCarLeft = '<img src="./images/red-car-left.png" alt="red-car-left">';

const blueCarRight = '<img src="./images/blue-car-right.png" alt="blue-car-right">';
const blueCarLeft = '<img src="./images/blue-car-left.png" alt="blue-car-left">';

const greenCarRight = '<img src="./images/green-car-right.png" alt="green-car-right">';
const greenCarLeft = '<img src="./images/green-car-left.png" alt="green-car-left">';

const greyCarRight = '<img src="./images/grey-car-right.png" alt="grey-car-right">';
const greyCarLeft = '<img src="./images/grey-car-left.png" alt="grey-car-left">';

const pinkCarRight = '<img src="./images/pink-car-right.png" alt="pink-car-right">';
const pinkCarLeft = '<img src="./images/pink-car-left.png" alt="pink-car-left">';

const yellowCarRight = '<img src="./images/yellow-car-right.png" alt="yellow-car-right">';
const yellowCarLeft = '<img src="./images/yellow-car-left.png" alt="yellow-car-left">';

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

const init = () => {
  chickenCrossElements[0].innerHTML = chickenPlayer;
  chickenPosition = 0;
  winner = false;
  die = false;
}


const movingCars = (roadArray,startPosition,speed,car) => {
  let position = startPosition;
 
   const stopCar = setInterval(() => {
      let currentRoadEl = roadArray[position];
      if (position > 0) {
        let prevRoadEl = roadArray[position-1];
        prevRoadEl.innerHTML = '';
      } 
  
      if (position === 11) {
        position = 0;
        currentRoadEl = roadArray[position];
      }

      if (currentRoadEl.innerHTML === '') {
        currentRoadEl.innerHTML = car;
      } else {
        die = true;
        updateMessage();
        currentRoadEl.innerHTML = deadChicken;
      }
      
      position ++;
 
    }, speed); 
  
  stopCarsArray.push(stopCar);
}


const stopAllCars = () => {
  stopCarsArray.forEach((Element) => {
    clearInterval(Element);
  }); 
}


const updateMessage = () => {
  console.log("Update message called");
 
  if (winner === true) {
    messageEl.style.color = 'blue';
    messageEl.textContent = `Congratulation! You are home!`;
    chickenSaid.style.color = 'blue';
    chickenSaid.textContent = "'Yay! I'm awesome!'";
    destinationImage.innerHTML = winnerChicken;
    chickenAtHome.innerHTML = chickenPlayer;
    stopAllCars();
    playAgainButton.style.display = 'block';
  } 

  if (die === true) {
    messageEl.style.color = 'red';
    messageEl.textContent = `So Sorry! You are dead!`;
    chickenSaid.style.color = 'red';
    chickenSaid.textContent = "'Ooo cluck! I'm dead!'";
    destinationImage.innerHTML = sadWifeChicken;
    stopAllCars();
    playAgainButton.style.display = 'block';
  }
}

const playAgainButtonClicked = () => {
  playAgainButton.style.display = 'none';
  location.reload(); //refresh the page
} 

const play = () => {
    init();
  
  // Note: 
  // movingCars = (roadArray,startPosition,speed,car)
  //First road right direction
  movingCars(road1Elements,2,350,blueCarRight);
  movingCars(road1Elements,5,350,redCarRight);
  
  //Second road left direction
  movingCars(road2Elements,1,400,redTruckLeft);
  movingCars(road2Elements,5,400,greenCarLeft);
  
  //Third road left direction
  movingCars(road3Elements,7,300,pinkCarLeft);
  
  //Fourth road right direction
  movingCars(road4Elements,9,200,greyCarRight);
  
  //Fifth road left direction
  movingCars(road5Elements,2,300,yellowCarLeft);
  movingCars(road5Elements,5,300, redCarLeft);
  movingCars(road5Elements,8,300, greenCarLeft);
  
  }

/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
      // Your code to execute when the down arrow key is pressed
      if (winner === false && die === false) {
        let currentChickenPosition = chickenCrossElements[chickenPosition];
        // console.log(currentChickenPosition);
        chickenCrossElements[chickenPosition].innerHTML = '';
        chickenPosition ++;
        if (chickenCrossElements[chickenPosition].innerHTML != ''){
          die = true;
          chickenCrossElements[chickenPosition].innerHTML = deadChicken;
        } else {
          chickenCrossElements[chickenPosition].innerHTML = runningChicken;
        }
      }
      
      if (chickenAtHome.innerHTML != '') {
        winner = true;
      }
      console.log('Down arrow key pressed!');
      updateMessage();
    }
  });

 

playAgainButton.addEventListener('click', playAgainButtonClicked);

play();