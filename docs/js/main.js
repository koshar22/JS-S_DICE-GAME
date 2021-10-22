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

let u1 = document.getElementById('u1')
let u2 = document.getElementById('u2')


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

// if (point == 6) {
//     user1Turn = user1Turn;
// }
// else {
//     user1Turn = !user1Turn;
// }


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
        banner.style.display = 'inline'
    }
}


function random() {
    return Math.floor(Math.random()*6) + 1
}

let screens = document.getElementById('screens')

let btn = document.getElementById('dice')



function hover() {
    if(user1Turn) {
        if (user2NameBox.style.backgroundColor == 'blueviolet') {
            user2NameBox.style.backgroundColor = 'transparent'
            user1NameBox.style.backgroundColor = 'blueviolet'
        }
    }
    else{
        if ( user1NameBox.style.backgroundColor == 'blueviolet') {
            user1NameBox.style.backgroundColor = 'transparent'
            user2NameBox.style.backgroundColor = 'blueviolet'
        }
    
    }
}


function rollDice() {
    let result = random();
    screens.textContent = result; 
    pointDecider(result)
    turnDecider(result)
    htmlUpdater()
    winnerDecider()
    hover()
}



btn.addEventListener('click', rollDice)

btn.addEventListener('mouseover', () => {
    if (user1Turn) {
        user1NameBox.style.backgroundColor = 'blueviolet'
    }
    else {
        user2NameBox.style.backgroundColor = 'blueviolet'
    }
})

btn.addEventListener('mouseout', () => {
    user1NameBox.style.backgroundColor = 'transparent'
    user2NameBox.style.backgroundColor = 'transparent'
})

user1NameBox.addEventListener('click', () => {
    user1NameBox.style.display = 'none';
    u1.style.display = 'inline';
})

document.getElementById('user1submit').addEventListener('click', () => {
    let n1 = document.getElementById('user1input').value
    user1 = n1
    htmlUpdater()
    u1.style.display = 'none';
    user1NameBox.style.display = 'inline';
})

user2NameBox.addEventListener('click', () => {
    user2NameBox.style.display = 'none';
    u2.style.display = 'inline';
})

document.getElementById('user2submit').addEventListener('click', () => {
    let n2 = document.getElementById('user2input').value
    user2 = n2
    htmlUpdater()
    u2.style.display = 'none'
    user2NameBox.style.display = 'inline';
})



