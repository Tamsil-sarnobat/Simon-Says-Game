let h2 = document.querySelector("h2");

let gameSqe = [];
let userSqe = [];

let btns = ["yellow","red","green","purple"];


let started = false;
let level = 0;
let highest = level ;

document.addEventListener("keydown",function(){
   if(started == false){
    started=true;
    console.log("Game start!");

    levelUp();
   }
});


function flashBtn(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },250);
}


function checkAns(idx){
    if(userSqe[idx] == gameSqe[idx]){
        if(userSqe.length == gameSqe.length){
            setTimeout(levelUp,1000);
        }
    }else{
       h2.innerText = `Game Over! Press Any key to start.`;
       let audio = new Audio("lose.wav");
       audio.play();
       document.querySelector("body").style.backgroundColor= "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor= "white";
       },250);
       reset();
    }
}



let  allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",pressBtn);
}

function pressBtn(){
    let btn = this;
    flashBtn(btn);

    let useColor = btn.getAttribute("id");
    userSqe.push(useColor);
    checkAns(userSqe.length-1);
}

let h3 = document.querySelector("h3");

function levelUp(){
    userSqe =[];
    if(level > highest){
        highest=level;
    }

    level++;
    h2.innerText = `level ${level}`;
    h3.innerText = `Highest Score : ${highest}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSqe.push(randColor);
    console.log(gameSqe);
    flashBtn(randBtn);

}



function reset(){
    started = false;
    level =0;
    userSqe =[];
    gameSqe =[];
}