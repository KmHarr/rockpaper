const shapes={"rock":{beats:"scissors"}, "paper":{beats:"rock"}, "scissors":{beats:"paper"}};

const middleText = document.getElementById("status-text");
const playerBtns = document.getElementsByClassName("shape");

for (let i=0; i<playerBtns.length; i++){
    playerBtns[i].addEventListener("click", function(){
        checkHands(playerBtns[i].value, "paper");
    });
}

function checkHands(playerHand, cpuHand){
    playerHand == cpuHand ? middleText.textContent = "draw": 
    shapes[playerHand].beats==cpuHand? middleText.textContent ="player wins": 
    shapes[cpuHand].beats==playerHand? middleText.textContent ="cpu wins": console.log("huh");
    
}