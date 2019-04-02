let input = document.createElement("input");
document.body.append(input);
input.style.cssText = "padding:5px; border: 1px solid red; width: 290px; height: 70px;" ;
lineBreak();
let buttonsText = [[7,8,9,'*'],[4,5,6,'-'],[1,2,3, '+'],[0,'C','=','%']];
for(let i = 0; i < 4; i++) {
  for(let j = 0; j < 4; j++) {
    let btn = document.createElement("button");
    btn.style.cssText="height: 75px; width: 75px; font-size: 25px; padding: 25px;";
    btn.innerHTML = buttonsText[i][j];
    btn.onclick = onButtonClick;
    document.body.append(btn);
  }
  lineBreak();
}

function lineBreak(){
  let br = document.createElement("br");
  document.body.append(br);
}

function onButtonClick() {
  if(this.innerHTML==='=') {
    input.value = eval(input.value);
    return;
  }
  
  if(this.innerHTML ==='C'){
    input.value = '';
    return;
  }
  input.value += this.innerHTML;
}