const hands =document.querySelector(".hands");
let dataUser=document.querySelector("[data-Score-User]");
let dataPC=document.querySelector("[data-Score-PC]");
const user=document.querySelector(".user");
const pc=document.querySelector(".pc");
const players=document.querySelector(".players");
const dlMode=document.querySelector("[data-DL-mode]");
const input=document.querySelector("[data-Input]");
const you=document.querySelector(".you");
const computer=document.querySelector(".computer");
// dataPC=dataUser=0;
let userScore=0;
let pcScore=0;
dlMode.addEventListener("click",()=>{
    if(dlMode.innerText=="Light"){
        var bodyElement = document.body;
        bodyElement.style.backgroundColor = '#141D2F';
        dlMode.innerText="Dark";
        dlMode.style.color="white";
        input.style.color="white";
        dataPC.style.color="white";
        dataUser.style.color="white";
        you.style.color="white";
        computer.style.color="white";
    }
    else{
        var bodyElement = document.body;
        bodyElement.style.backgroundColor = 'white';
        dlMode.innerText="Light";
        dlMode.style.color="black";
        input.style.color="black";
        dataPC.style.color="black";
        dataUser.style.color="black";
        you.style.color="black";
        computer.style.color="black"
    }
    }
)
hands.addEventListener("click",(event)=>{
    console.log(event.target.textContent);
    checkWinner(event.target.textContent);
    // console.log(arr[randIndex]==event.target.textContent);
})
function init(){
    if(pc.classList.contains("winner")){
        pc.classList.remove("winner");
        user.classList.remove("loser");
    }
    if(pc.classList.contains("loser")){
        pc.classList.remove("loser");
        user.classList.remove("winner");
    }
}
function append(emoji,flag){
    const div=document.createElement("div");
    div.innerText=emoji;
    if(flag==1){
        div.classList.add("winner");
    }
    else{
        div.classList.add("loser");
    }
    pc.after(div);
}
let flag=0;
function checkWinner(emoji){
    let pcChose=arr[rand()];
    init();
    if(pcChose==emoji){
        console.log("User Draw");
        append(pcChose);
        append(emoji);
        return;
    }
    if((pcChose=="✊" && emoji=="✋")){
        console.log("User Won");
        userScore++;
        dataUser.innerText=userScore;
        append(pcChose,0);
        append(emoji,1);
        // user.classList.add("winner");
        // pc.classList.add("loser");
        flag=1;
    }
    if((pcChose=="✋" && emoji=="✌️")){
        console.log("User Won");
        userScore++;
        dataUser.innerText=userScore;
        append(pcChose,0);
        append(emoji,1);
        // user.classList.add("winner");
        // pc.classList.add("loser");
        flag=1;
    }
    if((pcChose=="✌️" && emoji=="✊")){
        console.log("User Won");
        userScore++;
        dataUser.innerText=userScore;
        append(pcChose,0);
        append(emoji,1);
        // user.classList.add("winner");
        // pc.classList.add("loser");
        flag=1;
    }
    if(flag==0){
        pcScore++;
        dataPC.innerText=pcScore;
        append(pcChose,1);
        append(emoji,0);
        pc.classList.add("winner");
        user.classList.add("loser");
    }
    flag=0;
}
const arr=["✊","✋","✌️"];
function rand(){
    const randIndex=Math.floor(Math.random()*3);
    return randIndex;
}
// console.log(randIndex);

