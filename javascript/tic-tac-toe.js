let playerX = "X";
let playerO = "O";
let currentPlayer = playerX;
let board = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

for(let i=0;i< 3;i++) {
  for(let j =0; j< 3 ; j++) {
    let btn = document.createElement("button");
    btn.style.height = "50px";
    btn.style.width = "50px";
    btn.id = i + '' + j;
    btn.onclick = btnClicked;
    document.body.append(btn);
  }
  
  let br = document.createElement("br");
  document.body.append(br);
}

  
function btnClicked() {
  let id = this.id.split('');
  console.log(id);
  
  if(isDrawn()) {
    alert('match draw');
    return;
  }
  
  
  
  if(board[id[0]][id[1]] === 0) {
    this.innerHTML = currentPlayer;
    board[id[0]][id[1]] = currentPlayer;
    console.log(board);
    if(isWinning(currentPlayer)){
    alert(currentPlayer + ' ' + 'has won the Game');
    return ;
  }
    changePlayer(currentPlayer); 
  } else {
     alert('Not empty place');
     return;
  }
}  

function changePlayer(cp) {
  if(cp === playerX){
      currentPlayer = playerO;
  }
  if(cp === playerO){
      currentPlayer = playerX;
  }
}

function isDrawn() {
  let drawn = true;
  for(let i=0;i< 3;i++) {
   for(let j =0; j< 3 ; j++) {
     if (board[i][j] === 0) {
       drawn = false;
       break;
     }
   }
  }
  return drawn;
}

function isWinning(cp) {
  let won = false;
  
  if(board[0][0] == cp && board[1][1] == cp && board[2][2] == cp) {
    won = true;
  }
  
  if(board[0][2] == cp && board[1][1] == cp && board[2][0] == cp) {
    won = true;
  }
  
  // row
  if(board[0][0] == cp && board[0][1] == cp && board[0][2] == cp) {
    won = true;
  }
  
  if(board[1][0] == cp && board[1][1] == cp && board[1][2] == cp) {
    won = true;
  }
  
  if(board[2][0] == cp && board[2][1] == cp && board[2][2] == cp) {
    won = true;
  }
  
//column
  if(board[0][0] == cp && board[1][0] == cp && board[2][0] == cp) {
    won = true;
  }
   if(board[0][1] == cp && board[1][1] == cp && board[2][1] == cp) {
    won = true;
  }
   if(board[0][2] == cp && board[1][2] == cp && board[2][2] == cp) {
    won = true;
  }
  return won;
}







