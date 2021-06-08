let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".results >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcompchoice (){
    const compc = ['r','s','p'];
    const randnu = Math.floor(Math.random()*3);
    return compc[randnu];
}
function convert(option){
    if(option=='r') return "Rock";
    if(option=='s') return "Scissors";
    else return "Paper";
}
function win(user, comp) {
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML = convert(user) +" beats "+convert(comp)+". You Win!";
}

function draw(user, comp) {
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML = " Same choice of "+convert(comp)+". It is a Draw....";
}
function lose(user, comp) {
    compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML = convert(user) +" Loses to "+convert(comp)+". You Lost.....";
}

function game(userchoice){
    const compc = getcompchoice();
    switch(userchoice+compc){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice, compc);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice, compc);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice, compc);
            break;
    } 
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r")
    })
    paper_div.addEventListener('click', function(){
        game("p")
    })
    scissors_div.addEventListener('click', function(){
        game("s")
    })
}

main();