const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 32;
const size_x = Math.floor(canvas.width / box);
const size_y = Math.floor(canvas.height / box);
let score = 0;

const foodImg = new Image();
foodImg.src = "img/beer.png";

const headImg = new Image();
headImg.src = "img/snake.png";

let food = {
  x: Math.floor((Math.random() * (size_x - 1) + 1)) * box,
  y: Math.floor((Math.random() * (size_y - 1) + 1)) * box,
};

let snake = [];
snake[0] = {
  x: size_x / 2 * box,
  y: size_y /2  * box
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
  if(event.keyCode === 37 && dir !== "right")
    dir = "left";
  else if(event.keyCode ===  38 && dir !== "down")
    dir = "up";
  else if(event.keyCode ===  39 && dir !== "left")
    dir = "right";
  else if(event.keyCode ===  40 && dir !== "up")
    dir = "down";
}

function eatTail(head, arr) {
  for(let i = 0; i < arr.length; i++) {
    if(head.x === arr[i].x && head.y === arr[i].y)
      isOver();
  }
}

function setUp() {
  //фон
  ctx.fillStyle = "#0cf7ec";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //еда
  ctx.drawImage(foodImg, food.x, food.y);

  //счет
  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText(score, 0, 40);

  //цвет змеи
  ctx.fillStyle = "green";
}

function isOver() {
  clearInterval(game);
  let isAgain = confirm("GAME OVER. Еще раз?");
  isAgain ? location.reload() : alert(`Жаль. Твой счет: ${score}`);
}

function drawGame() {

  setUp();

  for(let i = 0; i < snake.length; i++) {
    i === 0 ? ctx.drawImage(headImg, snake[0].x, snake[0].y) : ctx.fillRect(snake[i].x, snake[i].y , box, box);
  }

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor((Math.random() * (size_x - 1) + 1)) * box,
      y: Math.floor((Math.random() * (size_y - 1) + 1)) * box,
    };
  } else {
    snake.pop();
  }

  if(snakeX < 0 || snakeX > box * size_x
    || snakeY < 0 || snakeY > box * size_y) {
    isOver();
  }

  if(dir == "left") snakeX -= box;
  if(dir == "right") snakeX += box;
  if(dir == "up") snakeY -= box;
  if(dir == "down") snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  eatTail(newHead, snake);

  snake.unshift(newHead);

}

let game = setInterval(drawGame, 90);







