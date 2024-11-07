let boxes=document.querySelectorAll('.box');
const retrybtn=document.querySelector('.retry');
const displaycol=document.querySelector('.displaymsg');
const displacont =document.querySelector('.displaying');
const newbtn=document.querySelector('.newgame');
let turnO=0;

let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
          //playerO
          box.innerText = "O";
          turnO = false;
        } else {
          //playerX
          box.innerText = "X";
          turnO = true;
        }
        box.disabled = true;
        count++;
        let iswinner=checkwinner();
        if(count==9){
            displaymessage('0');
            console.log('draw');

        }
    });
    });
const displaymessage=(x) =>{
    if (x=='0'){
        displaycol.innerText='ITS A DRAW';
    }
    else{
        displaycol.innerHTML=`THE WINNER IS ${x}`;

    }
    displacont.classList.remove('hide');

}
const checkwinner=()=>{
    for(let pattern of winPatterns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!=''&&p2!=''&&p3!=''){
            if(p1==p2 && p2==p3){
                displaymessage(`${p1}`);
                disableallbox();

            }
        }
        
    }   
};
const disableallbox=() =>{
    for(let box of boxes){
        box.disabled= true;
    
    }

}
const enablebox=() =>
{
for(let box of boxes){
    box.innerText='';
    box.disabled= false;


}
displacont.classList.add('hide');
}
retrybtn.addEventListener("click",() =>{
    enablebox();
});
newbtn.addEventListener("click",() =>{
    enablebox();
});