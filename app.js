
console.log("Sanity check");

let hungryButton = document.getElementById('hungry');
let lightsOutButton = document.getElementById('sleep');
let playTimeButton = document.getElementById('play');
let startGameButton = document.getElementById('startGame');
let time = 0;
let timerPlaceHolder = document.getElementById("timer");

console.log(hungryButton);
console.log(lightsOutButton);
console.log(playTimeButton);

function handleStartGame () {
  let name = prompt("What is your name?");
  let namePlaceHolder = document.getElementById('name');
  namePlaceHolder.textContent = name;
  startTimer();
  console.log(namePlaceHolder);
}

function handleHungry () {
console.log("I am in hungryFunction");
}

function handleLightsOut () {
  console.log("I am in handleLightsOut");
}

function handlePlayTime (){
  console.log("I am in handlePlayTime");
}

function startTimer() {
    const Timer = setInterval(function () {
      if (time <= 10) {
        time++
        timerPlaceHolder.textContent = `timer: ${time}`;
      } else {
        console.log("Time is up");
        clearInterval(Timer);
      }
    }, 1000);
  }


hungryButton.addEventListener("click", handleHungry);
lightsOutButton.addEventListener("click", handleLightsOut);
playTimeButton.addEventListener("click", handlePlayTime);
startGameButton.addEventListener("click", handleStartGame);



// o  n "Eat" button pressed
//              if "hunger" is = true, then
//                 decrement "bone" count
//                 reset timer to 10
//          on "play" button pressed
//             if "sleepiness" is = true, then
//                 decrement "bed" count
//                 reset timer to 10
//         on "NAP" button pressed
//             if "Nap" = true then
//             decrement "bed" count
//             reset timer to 10


// //JS Class
// class Tamagaohi {
//     constructor(name) {
//         this.name = name;
//     }

//         // this.hunger = 0;
//         // this.age = 0;
//         // this.sleepiness = 0;
//         // this.boredom = 0;    
// }





  // 3 buttons: A, B, C
  //    A: feedPet
  //    B: playPet
  //    C: goToSleep

  // User creates pet name, CLICKS submit
  // egg appears
  // hatching lasts: 15 seconds, during which cracks appear and egg wobbles
  // at 15 seconds, egg cracks, TAMAGATCHI appears timer starts

  //BUTTONS
  // feedMe
  // 

//   /------- Timer ------- //
// // Select Button
// // Save Button in Variable
// // Add click event listener to button
// //--------App State
// let time = 3;
// //---------- Cached DOM Elements
// let startButton = document.getElementById("startGame");
// //------------Event Listeners
// startButton.addEventListener("click", handleStartGame);
// //----------- Function Declarations
// function handleStartGame() {
//   console.log("Start Game clicked...!");
//   // Start Timer
//   startTimer(3);
// }
// // "Begin" Timer
// function startTimer() {
//   const Timer = setInterval(function () {
//     if (time > 0) {
//       time--;
//       console.log(time);
//     } else {
//       console.log("Time is up");
//       clearInterval(Timer);
//     }
//   }, 1000);
// }
// //------- Timer ------- //
// // Select Button
// // Save Button in Variable
// // Add click event listener to button
// //--------App State
// let time = 3;
// //Cached DOM Elements
// const startButton = document.getElementById("startGame");
// //------------Event Listeners
// startButton.addEventListener("click", handleStartGame);
// //----------- Function Declarations
// function handleStartGame() {
//   console.log("Start Game clicked...!");
//   // Start Timer
//   startTimer(3);
// }
// // "Begin" Timer
// function startTimer() {
//   const Timer = setInterval(function () {
//     if (time > 0) {
//       time--;
//       console.log(time);
//     } else {
//       console.log("Time is up");
//       clearInterval(Timer);
//     }
//   }, 1000);
// }





