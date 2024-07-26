import { useState } from "react";
import Card from '../card/card.jsx';
import './grid.css';
import isWinner from "../helper/checkwinner.js";
//  humne grid me 2d array kyun nhi banai hum oned array ko hi  gruid man rh ehai 3*3=9
//0 1 2
//3 4 5
//6 7 8

// function play(idx){
//   if(turn==true){
//     board[idx]='O';
//   }
//   else{
//     board[idx]='X';
//   }
  
//   const win=isWinner(board,turn?'O':'X');
//   if(win){
//     setWinner(win);
    
//   }
  
//   setBoard([...board]);//is tarah se hi set karne par element dobara render hota hai
//   setTurn(!turn);
  
// }


function Grid({numberOfCards}){
  
  // Array(numberOfCards).fill("") yeh numberOfCards length ki array bna dega and useke har element ko "" isse fill kar dega
  const [winner,setWinner]=useState("");
  const [board,setBoard]=useState(Array(numberOfCards).fill(""));
  const [draw,setdraw]=useState(false);
const [turn,setTurn]=useState(true);//if turn==true--> O ki turn hai turn==false--> X ki turn hai
function play(idx){

  let cnt=0;
if(turn==true){
  board[idx]='O';
}
else{
  board[idx]='X';
}

const win=isWinner(board,turn?'O':'X');
if(win){
setWinner(win);

}
else{

  for(let i=0;i<numberOfCards;i++){
    if(board[i]=='X'||board[i]=='O'){
cnt++;
    }
  }

}
console.log("cnt=",cnt);
if(cnt==numberOfCards){
  setdraw(true);
 setWinner("no one")
}
setBoard([...board]);//is tarah se hi set karne par element dobara render hota hai
setTurn(!turn);

}



function reset(){

setTurn(true);
setBoard(Array(numberOfCards).fill(""));
setWinner(null);
setdraw(false);

}



 return (<div className="grid-wrapper">
  {
(draw||winner)&&(
<>

<h1 className="turn-highlight">winner is {winner}</h1>
<button className="reset" onClick={reset}>Reset game</button>
</>
)

  }

{/* h1 highlight the turn ki kiski baari hai */}
<h1 className="turn-highlight"> Current Turn {(turn)?'O':'X'} </h1>
 <div className="grid">

  {
    //hum log har baar card pe click karne par icon change karenge and dekhenge koi jeeta ki nhi
    board.map((el,idx)=>{
      //if game is winner is declare then game is end
      return <Card gameEnd={winner?true:false} key={idx} onplay={play} player={el} index={idx}/>
      // player={el} is liye de rhe hai because board ki array me hum 'O' ya 'X' dee rhe hai
      //index ka use isliye karenge taki humko pta chale ki iis index par humne click kara hai
    })
    
  }
 



 </div>

  </div>)

}

export default Grid;
