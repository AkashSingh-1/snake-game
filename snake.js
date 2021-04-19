export var SNAKE_SPEED=5;
 

let snakeBody=[{x:13,y:11}]
let inputDirection={x:0,y:0}
let lastInputDirection={x:0,y:0}
let increaseSnake=0;

export function snakeUpdate(){
   addSnake();
   lastInputDirection=inputDirection;
    document.addEventListener('keydown',e=>{
        switch(e.keyCode){
            case 37:
                if(lastInputDirection.x!=0) break;
                inputDirection={x:-1,y:0}
                break;
            case 38:
                if(lastInputDirection.y!=0) break;
                inputDirection={x:0,y:-1}
                break;
            case 39:
                if(lastInputDirection.x!=0) break;
                inputDirection={x:1,y:0}
                break;
            case 40:
                if(lastInputDirection.y!=0) break;
                inputDirection={x:0,y:1}
                break;
        }
    })
    for(let i=snakeBody.length-2;i>=0;i--){
        snakeBody[i+1]={...snakeBody[i]}
    }
    
    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;
    
}

export function snakeDraw(gameboard){
    //console.log("delete")
    snakeBody.forEach(segment=>{
        let e= document.createElement('div');
        e.style.gridColumnStart=segment.x;
        e.style.gridRowStart=segment.y;
        e.classList.add('snake')
        gameboard.appendChild(e);
    })
    

}

export function onSnake(position){
    return snakeBody.some((e)=>{
       return  position.x==e.x && position.y==e.y
    })
}

export function expandSnake(expansionRate){
    increaseSnake+=expansionRate
}

function addSnake(){
    for(let i=0 ; i<increaseSnake;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    increaseSnake=0;
}

export function outsideTheGrid(position){
    // console.log(position.x)
    if(position.x>=21||position.x<=0 || position.y>=21||position.y<=0){
        console.log('gameover')
        return true
    }
}

export function snakeHead(){
    return snakeBody[0]
}
export function snakeIntersect(position){
    let y=[...snakeBody]
    y.shift()
    if(snakeBody.length>5){
    return y.some((e)=>{
            return  position.x==e.x && position.y==e.y
        
    })}
    return false
}

document.getElementById("easy").addEventListener('click',(e)=>{
    SNAKE_SPEED=1
    console.log("easy")
    document.querySelector('.btn').innerHTML="easy"
})
document.getElementById("medium").addEventListener('click',(e)=>{
    SNAKE_SPEED=5
    console.log("mid")
    document.querySelector('.btn').textContent="medium"
})
document.getElementById("hard").addEventListener('click',(e)=>{
    SNAKE_SPEED=10
    console.log("hard")
    document.querySelector('.btn').innerHTML="hard"
})