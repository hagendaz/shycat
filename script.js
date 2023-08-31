
const gameContainer = document.querySelector('.container');
const allcatItems = document.querySelectorAll('.item');
let startGame, startTime, countDown = 20, score = 0;

const timeCount = document.getElementById('time-count');
const scoreCount = document.getElementById('score-count');

gameContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('cat-clicked')){
        score++;
        scoreCount.innerHTML = score;

        const boxElem = e.target.parentElement.previousElementSibling;

        let textEl = document.createElement('span');
        textEl.setAttribute('class', 'cat-text');
        textEl.innerHTML = "meow!";
        boxElem.appendChild(textEl);

        setTimeout(() => {
            textEl.remove();
        }, 300);
    }
})

document.addEventListener('DOMContentLoaded', () => {
    // total game time is 20 seconds
    startTime = setInterval(() => {
        timeCount.innerHTML = countDown;
        countDown--;
    }, 1000);

    startGame = setInterval(() => {
        showcat();
    }, 600);
});

// shows cat
function showcat(){
    if(countDown <= 0){
        clearInterval(startGame);
        clearInterval(startTime);
        timeCount.innerHTML = "0";
    }
    let catToAppear = allcatItems[getRandomValue()].querySelector('.cat');
    catToAppear.classList.add('cat-appear');
    hidecat(catToAppear);
    
}

function getRandomValue(){
    let rand = Math.random() * allcatItems.length;
    return Math.floor(rand);
}

// hide cat
function hidecat(catItem){
    setTimeout(() => {
        catItem.classList.remove('cat-appear');
    }, 1000);
}