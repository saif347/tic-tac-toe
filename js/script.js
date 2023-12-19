const boxes = document.querySelectorAll('.box');
let winner = document.getElementById('winner');

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,7],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turnO){
            box.innerHTML = 'O'
            turnO = false;
        }
        else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
    })
})

const disabledBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBtn = ()=>{
    for(let box of boxes){
        box.disabled= false;
    }
}

const checkWinner = ()=>{
    for(let pattern of winPattern){
        console.log(boxes[pattern[0]].innerHTML, boxes[pattern[1]].innerHTML, boxes[pattern[2]].innerHTML);
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;

       if(pos0val !== "" && pos1val !== "" && pos2val !== ""){
        if(pos0val === pos1val && pos0val === pos2val && pos1val === pos2val){
            disabledBtn();
            winner.innerText = 'the winner is :'+ pos0val
            winnerGif();
        }
       }
    }
}

const reset = ()=>{
    turnO = true;
    winner.innerText = '';
   
    enabledBtn();
    boxes.forEach((box)=>{
        box.innerHTML= '';

    })
    hideGif();
}

const newGame =()=>{
    turnO = true;
    winner.innerText = '';
    enabledBtn();
    boxes.forEach((box)=>{
        box.innerHTML= '';

    })
    hideGif();
}

const winnerGif =()=>{
    document.getElementById('winner-gif').style.width = '120px';

}
function hideGif (){
    document.getElementById('winner-gif').style.width = '0';
}