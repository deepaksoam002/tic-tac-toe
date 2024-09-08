let btns=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#reset");
let msgContainer=document.querySelector(".msgcontainer");
let newGamebtn=document.querySelector("#new-game");
let msg=document.querySelector("#msg");
let turn=true;
let count=0;
const winningpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [6,7,8],
    [2,5,8],
    [2,4,6],
];
const resetGame=()=>{
    turn=true;
    count=0;
    enableBtn();
    msgContainer.classList.add("hide");
};

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turn===true){
            btn.innerHTML="X";
            turn=false;
        }
        else{
            btn.innerHTML="O";
            turn=true;
        }
        btn.disabled=true;
        count++;

        let isWinner = checkWinner();
        if(count === 9&& !isWinner){
          gameDraw();
        }

    });
});
const gameDraw=()=>{
    msg.innerHTML=`GAME WAS A DRAW`;
    msgContainer.classList.remove("hide");
    disableBtn();
};
const enableBtn=()=>{
    for (let btn of btns) {
        btn.disabled=false;
        btn.innerHTML="";
    }
};
const disableBtn=()=>{
    for (let btn of btns) {
        btn.disabled=true;
    }
};
let checkWinner=()=>{
    for (const pattern of winningpattern) {
        let pos1=btns[pattern[0]].innerHTML;
        let pos2=btns[pattern[1]].innerHTML;
        let pos3=btns[pattern[2]].innerHTML;
     if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            showWinner(pos1);
            return true;
        }
     }   
    }
};
const showWinner=(winner)=>{
    msg.innerHTML=`CONGRATULATIONS,The Winner Is : ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
};
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);