import { SNAKE_SPEED,snakeUpdate, snakeDraw,snakeHead,outsideTheGrid,snakeIntersect} from "./snake.js";
import {foodUpdate,foodDraw} from "./food.js";
let timeGap=0;
let previousTime=0;
let gameboard=document.querySelector("#game-board");
let gameoverCheck=false
function main(currentTime){
    if(gameoverCheck){
        if(confirm('press ok to restart')){
            location.reload()
        }
        return
    }
    window.requestAnimationFrame(main);
    timeGap=(currentTime-previousTime)/1000;
    if(timeGap<1/SNAKE_SPEED) return ;
    //console.log('request' );
    previousTime=currentTime;
    update();
    draw();
}

function update(){
    snakeUpdate()
    foodUpdate()
    gameover()
}
function draw(){
    gameboard.innerHTML=""
    snakeDraw(gameboard)
    foodDraw(gameboard)
}
function gameover(){
    if(outsideTheGrid(snakeHead())||snakeIntersect(snakeHead())){
        gameoverCheck=true;
    }
}


window.requestAnimationFrame(main);