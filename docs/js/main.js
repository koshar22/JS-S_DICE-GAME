//V ariables

let user1 ='Akash';
let user2 = 'Rahul';

let winningPoint = 50;


let user1Point = 0;
let user2Point = 0;

let user1Turn = true;

let gameRunning = true;
let winner;

 let currentUserName;

//Elements
let currentTurnBox = document.getElementById('turn')
let user1NameBox = document.getElementById('user1')
let user2NameBox = document.getElementById('user2')

let user1PointBox = document.getElementById('user1Point')
let user2PointBox = document.getElementById('user2Point')

let winningPointBox = document.getElementById('winningPoint')
let banner = document.getElementById('banner')
let winnerBox = document.getElementById('winner')


function htmlUpdater() {
    if (user1Turn) {
        currentUserName = user1;
    }
    else {
        currentUserName = user2;
    }

    currentTurnBox.textContent = currentUserName;
    user1NameBox.textContent = user1;
    user2NameBox.textContent = user2;
    user1PointBox.textContent = user1Point;
    user2PointBox.textContent = user2Point;
    winningPointBox.textContent =   winningPoint;

    if(user1Turn) {
        user1PointBox.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
        user2PointBox.style.backgroundColor = 'transparent'
    }

    else {
        user2PointBox.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
        user1PointBox.style.backgroundColor = 'transparent'
    }
}

htmlUpdater()


function pointDecider(point) {
    if (user1Turn) {
        // For user 1
        user1Point += point
    }
    else {
        // For user 2
        user2Point += point
    }
}


function turnDecider(point) {
    // user 2
    if (point != 6) {
        user1Turn = !user1Turn;
    }
}


function winnerDecider() {
    if(user1Point >= winningPoint) {
        gameRunning = false;
        winner = user1;
    }
    else if (user2Point >= winningPoint) {
        gameRunning = false;
        winner = user2;
    }
    if (!gameRunning) {
        console.log(`winner is ${winner}`);
        winnerBox.textContent = winner;
        banner.style.display = 'block'
    }
}

// if (point == 6) {
//     user1Turn = user1Turn;
// }
// else {
//     user1Turn = !user1Turn;
// }



function random() {
    return Math.floor(Math.random()*6) + 1
}

let screens = document.getElementById('screens')

let btn = document.getElementById('dice')


function rollDice() {
    let result = random();
    screens.textContent = result; 
    pointDecider(result)
    turnDecider(result)
    htmlUpdater()
    winnerDecider()
}



btn.addEventListener('click', rollDice)