const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 20;
const canvasSize = 400;

let snake = [
    { x: 200, y: 200 }
];

let direction = "RIGHT";

let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
};

let score = 0;

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {

    if(event.key === "ArrowUp" && direction !== "DOWN"){
        direction = "UP";
    }

    if(event.key === "ArrowDown" && direction !== "UP"){
        direction = "DOWN";
    }

    if(event.key === "ArrowLeft" && direction !== "RIGHT"){
        direction = "LEFT";
    }

    if(event.key === "ArrowRight" && direction !== "LEFT"){
        direction = "RIGHT";
    }
}

function drawGame(){

    // Clear board
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    snake.forEach((part, index) => {

        ctx.fillStyle = index === 0 ? "green" : "lime";

        ctx.fillRect(part.x, part.y, box, box);

        ctx.strokeRect(part.x, part.y, box, box);
    });

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Head position
    let headX = snake[0].x;
    let headY = snake[0].y;

    // Move snake
    if(direction === "UP") headY -= box;
    if(direction === "DOWN") headY += box;
    if(direction === "LEFT") headX -= box;
    if(direction === "RIGHT") headX += box;

    let newHead = {
        x: headX,
        y: headY
    };

    // Eat food
    if(headX === food.x && headY === food.y){

        score++;
        document.getElementById("score").innerText = score;

        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };

    } else {
        snake.pop();
    }

    // Wall collision
    if(
        headX < 0 ||
        headY < 0 ||
        headX >= canvasSize ||
        headY >= canvasSize
    ){
        gameOver();
        return;
    }

    // Self collision
    for(let i = 0; i < snake.length; i++){

        if(
            snake[i].x === headX &&
            snake[i].y === headY
        ){
            gameOver();
            return;
        }
    }

    snake.unshift(newHead);
}

function gameOver(){

    clearInterval(gameLoop);

    alert("Game Over! Score: " + score);
}

let gameLoop = setInterval(drawGame, 150);