
let brock = document.querySelector("#r");
let bpaper = document.querySelector("#p");
let bscissor = document.querySelector("#s");


brock.addEventListener('click',() =>{ check("Rock")});
bpaper.addEventListener('click',() => {check("Paper")});
bscissor.addEventListener('click',() => {check("Scissor")});

function check (playerchoice) {
    const choice = ["Rock","Paper","Scissor"];
    const botselect=choice[Math.floor(Math.random() *3)];

    if (playerchoice>botselect) {
        pTag.innerHTML="You win!";
    } else if (playerchoice==botselect) {
        pTag.innerHTML="Equal";
    } else {
        pTag.innerHTML="You loose";
    }
}
