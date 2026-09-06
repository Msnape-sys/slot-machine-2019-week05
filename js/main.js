

let displayBet = (document.getElementById("bet"));
let displayBalance = document.getElementById("balance");
let displayWinnings = document.getElementById("winnings")
let balance = Number(displayBalance.textContent);
let currentBet = 0;
const buttonMinBet = document.getElementById("buttonMinBet");
buttonMinBet.addEventListener("click",placeMinBet);
const buttonMaxBet = document.getElementById("buttonMaxBet");
buttonMaxBet.addEventListener("click",placeMaxBet);

function placeMinBet (){
displayBet.innerText = "$100";
    currentBet = 100;
result.innerText = " ";
displayWinnings.innerText = " "

}

function placeMaxBet(){
 displayBet.innerText = "$500";
 currentBet = 500;
result.innerText = " ";
displayWinnings.innerText = " ";

}



let spin = document.getElementById("spin");
spin.addEventListener("click",placeYourBet)

function placeYourBet(){
 if(currentBet === 0){
    result.innerText = "Please choose a service"
 }
    else if(currentBet === 100 && balance >=100){
         balance -=100;
        spinTheReels();
         displayBalance.innerText = balance;
    }else if(currentBet === 500 && balance >=500){
        balance -=500;
    displayBalance.innerText = balance;
    spinTheReels();    
}else{
        displayBalance.innerText = balance;
       result.innerText = "Sorry! Your deposit was non-refundable."  
    
    }
}
function spinTheReels(){
let reelSymbols = ["img/reels/blowdryer.png",
    "img/reels/silkpress.png",
    "img/reels/smiley.png",
    "img/reels/edgecontrol.png",
    "img/reels/crown.png"
];  
let winMessages =[
"Fresh install; Lace where??",
"Wash Included. Blow Dry Included. We won!",
"Your direct deposit was larger than expected, lets add a deep condish",
"Edges intact? No tension headache? A win is a win!",
"Your stylist just asked if she can take pictures = she ate!",
];
let randomWinMessages = Math.floor(Math.random()*winMessages.length)
let loseMessages =[
"Your on your way to your appoinment and your stylist just texted: 'hey boo...' ",
"You booked 'smedium' but your parts are looking large",
"Your stylist just informed you that wash and blow dry is not included",
"you left your card unlocked and all your subscription charges just hit your account",
"you forgot your braiding hair at home",
];
let randomLoseMessages = Math.floor(Math.random()*loseMessages.length)  
let reel1 = document.getElementById("reel1")
let spinValue1 = Math.floor(Math.random()*5);
reel1.innerHTML = `<img src="${reelSymbols[spinValue1]}" alt="">`;
let reel2 = document.getElementById("reel2");
let spinValue2 = Math.floor(Math.random()*5);
reel2.innerHTML = `<img src="${reelSymbols[spinValue2]}" alt="">`;
let reel3 = document.getElementById("reel3");
let spinValue3 = Math.floor(Math.random()*5);
reel3.innerHTML = `<img src="${reelSymbols[spinValue3]}" alt="">`;
let result = document.getElementById("result");
if (spinValue1 === spinValue2 && spinValue2 === spinValue3){
    let payout = currentBet*2;
    balance +=payout;
    displayWinnings.innerText = "Beauty Bonus: $"+payout;
    displayBalance.innerText = balance;
    result.innerText = winMessages[randomWinMessages];
}else{displayWinnings.innerText ="$0";
    result.innerText = loseMessages[randomLoseMessages];
    

}
}






