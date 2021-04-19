import {onSnake,expandSnake} from "./snake.js"
let foodPosition=randomFoodPosition()
const EXPANSION_RATE=1
let score=0;
export function foodUpdate(){
    if(onSnake(foodPosition)){
        foodPosition=randomFoodPosition()
        expandSnake(EXPANSION_RATE);
        let level=document.querySelector('.btn').textContent;
        if(level==="hard"){
            score+=10
            document.getElementById('score-val').textContent=score;
        }
        else if(level==="medium"){
            score+=5
            document.getElementById('score-val').textContent=score;
        }
        else{
            score+=1
            document.getElementById('score-val').textContent=score;
        }
    }
 }
 
 export function foodDraw(gameboard){
     //console.log("delete")
     
         let e= document.createElement('div');
         e.style.gridColumnStart=foodPosition.x;
         e.style.gridRowStart=foodPosition.y;
         e.classList.add('food')
         gameboard.appendChild(e);
     
 }

 function randomFoodPosition(){
     let newFoodPosition
     while(newFoodPosition==null || onSnake(newFoodPosition)){
        let posx=Math.floor(Math.random()*21+1)
        let posy=Math.floor(Math.random()*21+1)
        newFoodPosition={x:posx,y:posy}
     }
     
     return newFoodPosition
 }

 