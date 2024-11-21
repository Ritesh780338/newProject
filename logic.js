
const bird = document.getElementById('bird');
const pipes = document.querySelectorAll('.pipe');
let birdTop = 200;
let gravity = 2;
let gameInterval;
let isGameOver = false;

document.body.addEventListener('click', fly);

function fly() {
    birdTop -= 40;
    bird.style.top = birdTop + 'px';
}

function startGame() {
    gameInterval = setInterval(() => {
        birdTop += gravity;
        bird.style.top = birdTop + 'px';

        
        pipes.forEach(pipe => {
            const pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue('left'));
            const pipeHeight = parseInt(window.getComputedStyle(pipe).getPropertyValue('height'));
            const pipeTop = pipe.classList.contains('top-pipe') ? 0 : 500 - pipeHeight;

            if (
                pipeLeft > 50 &&
                pipeLeft < 110 &&
                (birdTop < pipeHeight || birdTop > pipeTop - 30)
            ) {
                endGame();
            }
        });

        if (birdTop > 470 || birdTop < 0) endGame();
    }, 20);
}

function endGame() {
    clearInterval(gameInterval);
    isGameOver = true;
    alert('Game Over! Click OK to Restart.');
    location.reload();
}

startGame();
