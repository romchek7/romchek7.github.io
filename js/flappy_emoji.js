alert("START GAME!");

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var emoji = new Image();
var bg = new Image();
var fg = new Image();
var pipeUP = new Image();
var pipeBottom = new Image();

emoji.src = "../img/flappy_emoji/rocket.png";
bg.src = "../img/flappy_emoji/emoji_bg.png";
fg.src = "../img/flappy_emoji/emoji_fg.png";
pipeUP.src = "../img/flappy_emoji/pipeUp.png";
pipeBottom.src = "../img/flappy_emoji/pipeBottom.png";

var score_audio = new Audio();
score_audio.src = "../audio/flappy_emoji/score.mp3";

var gap = 95; //відступ між колонами

//кнопка дії
var btn = document.getElementById("btn");

//емоджі об'єкт
var xPos = 10;
var yPos = 190;
var grav = 1.2; //зміна позиції

//рахунок
var score = 0;

//get war and consts
let frames = 0;

//функція стрибка емоджі
canvas.addEventListener("click", MOVE_UP);
function MOVE_UP(){
    yPos -= 30;
}

//блоки
var pipe = [];
pipe[0]={
    x: canvas.width,
    y : 0
};

function DRAW(){
    context.drawImage(bg, 0, 0);

    for(var i = 0; i < pipe.length; i++){
        context.drawImage(pipeUP, pipe[i].x, pipe[i].y);
        context.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUP.height + gap);
        pipe[i].x--;

        //створення нових перешкод
        if(pipe[i].x == 125){
            pipe.push({
                x: canvas.width,
                y : Math.floor(Math.random() * pipeUP.height) - pipeUP.height
            });
        }

        //очки
        if(pipe[i].x == 5){
            score++;
            score_audio.play();
        }

        //перевірка на програш
        if(xPos + emoji.width >= pipe[i].x 
            && xPos <= pipe[i].x +pipeUP.width 
            && (yPos <= pipe[i].y + pipeUP.height 
                || yPos + emoji.height >= pipe[i].y + pipeUP.height + gap)
                || yPos + emoji.height >= canvas.height - fg.height){
                    alert("Score: " + score);
                    location.reload();
                }
    }

   // context.drawImage(pipeUP, 100, 0);
   // context.drawImage(pipeBottom, 100, 0 + pipeUP.height + gap);

    context.drawImage(fg, 0, canvas.height - fg.height);

    //емоджі об'єкт
    context.drawImage(emoji, xPos, yPos);
    yPos += grav;

    //score
    context.fillStyle = "#000";
    context.font = "20px Verdana";
    context.fillText("Score: " + score, 10, canvas.height - 20);

    //сила гравітації
    requestAnimationFrame(DRAW);
}

pipeBottom.onload = DRAW;
btn.addEventListener("click", MOVE_UP);