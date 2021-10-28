//Game Constants and Variables
let direction = {x: 0,y:0};
const foodSound = new Audio('snakeFoodSound.mp3');
const gameSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.wav');
const musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime =0;
let snakeArr =[
    {x:13,y:15}
]
food = {x:6,y:7};


//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();  
}

function gameEngine(){
    // Part 1: Updating the snake array and food
    //Part 2: Display the snake and food
    //Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
       
        snakeElement.ClassList.add('snake');
        if(index === 0){
            
            snakeElement.ClassList.add('head');
        }
        board.appendChild(snakeElement);

    });
    //Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.ClassList.add('food')
    board.appendChild(foodElement);
}








//Main logic starts here
window.requestAnimationFrame(main);
