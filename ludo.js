let pos1=350;
let pos2=0;
let top1=0;
let top2=0;
let turn=1;
let a=0;
let b=0;
let win=0;

function toss(){
if(win==0){
let x=Math.floor((Math.random()*3)+1);                           //to create a random number 1-3
switch(x){
case 1:
y="one.jpg";
break;
case 2:
y="two.jpg";
break;
case 3:
y="three.jpg";
break;
default:
return;
}
document.getElementById("dice").src=y;             //dice image according to rand number
if(turn==1){
player1(x);
turn++;
}else{
player2(x);

turn--;
}
}
}

function player1(sen){
let id=null;
let z=sen*50;               //convert toss number into movement
let pc1=document.getElementById("coin1");
if(top1==0){
  a=pos1-z;   // to move right to left
}
else{
  a=pos1+z;   // to move left to righy

}

id=setInterval(frame,10);

function frame(){

if (pos1==350&&top1==55){
clearInterval(id);
if(pos1==350&&top1==55&&z==50){	//winning condition
pc1.style.left=480;
pc1.style.top=25;
win=1;
document.getElementById("winner").innerHTML="Player 1 win";	//commentry

clearInterval(id);
}
}else{
if(pos1==a){
document.getElementById("winner").innerHTML="Player  2 toss";	//commentry
document.body.style.background="lightpink";
clearInterval(id);

}else{
if(pos1==0&&top1==0){	//to  turn the coin down
pc1.style.top=55;
a=a*-1;
a=a-50;
top1=55;
}
else{
if(top1==55){
pos1++;	// movement towards right
pc1.style.left=pos1;
}
else{
pos1--;	// movement towards left
pc1.style.left=pos1;
}}}}}

}
function player2(sen){
let id=null;
let y=sen*50;	  //convert toss number into movement
let pc2=document.getElementById("coin2");
if(top2==55){
b=pos2-y;	 // to move right to left
}else{
b=pos2+y;	 // to move  left to right
}
console.log(b);
id=setInterval(fram,10);
function fram(){

if(pos2==0&& top2==55){
clearInterval(id);
if(y==50){
pc2.style.left=-120;
pc2.style.top=25;
win=2;
document.getElementById("winner").innerHTML="Player 2 win";
clearInterval(id);
}

}
else{
if(pos2==b){
document.getElementById("winner").innerHTML="Player 1 toss";	
document.body.style.background="lightgreen";
clearInterval(id);
}
else{
if(pos2==350&&top2==0){
pc2.style.top=55;
let temp=0;		//temp var hold number of movement after move down
top2=55;
temp=b-pos2;
temp=temp-50;
b=pos2-temp;
}
else{
if(top2==55){		//movement towards left 
pos2--;
pc2.style.left=pos2;
}else{
pos2++;			//movement towards right
pc2.style.left=pos2;
}}}}}

}
