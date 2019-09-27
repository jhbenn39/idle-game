var scr = 0;
var scr1 = 0;
var scr2 = 0;
var scr3 = 0;
var scr4 = 0;
var scr5 = 0;
var scr6 = 0;
var scr7 = 0;
var scr8 = 0;
var scr9 = 0;
var scr10 = 0;
var scr11 = 0;
var scr12 = 0;
var scr13 = 0;
var scr14 = 0;
var scr9a = 0;

var stnb1;
var stnc1;
var stk1;
var stnpkax1;
var smltr1;
var stnax1;
var wda1;
var wdb1;
var stnshvl1;
var irna1;
var irnb1;
var irnc1;
var irnpkax1;
var irnax1;
var irnshvl1;
var olmne1;
var plstic1;
var pc1;
var end;
var end2;

var beginning = new Text('You are all alone in your little world with no civilization and you have to make a computer to get back to people');
var text = new Text('Get some stone to start your journey');
let text1 = new Text('Great! Now you should grab some sticks to make a stone pickaxe');
let text2 = new Text('Now you can get stone more quickly');
let text3 = new Text('Once you have enough stone, make a smelter');
let text4 = new Text('Make a stone axe to get wood for your smelter');
let text5 = new Text('You can now find iron but you cant smelt it into anything');
let text6 = new Text("You find some clay but you can't get it because you need a shovel to get it");
let text7 = new Text('Make a stone shovel');
let text8 = new Text('You can now get clay');
let text9 = new Text('You can now make iron tools to get materials efficiently');
let text10 = new Text('If you have enough iron, create an oil mine')
let text11 = new Text('You can now make plastic');
let text12 = new Text('If you have enough plastic and iron you can make a computer');


text1.hide();
text2.hide();
text3.hide();
text4.hide();
text5.hide();
text6.hide();
text7.hide();
text8.hide();
text9.hide();
text10.hide();
text11.hide();
text12.hide();


var stna1 = new Button('Stone',stna);

var mat = new Text('Stone = ' + scr);
let mat1 = new Text('Sticks = ' + scr1);
let mat2 = new Text('Stone Pickaxe = 30 Stone + 20 Sticks');
let mat3 = new Text('Smelter = 100 Stone');
let mat4 = new Text('Stone Axe = 60 Stone + 40 Sticks');
let mat5 = new Text('Wood = '+ scr5);
let mat6 = new Text('Stone Shovel = 60 Stone + 50 Wood');

let mat8 = new Text('Iron = ' + scr8);
let mat9 = new Text('Pickaxe Upgrade = 200 Iron + 100 Wood');
let mat10 = new Text('Axe Upgrade = 200 Iron + 100 Wood');
let mat11 = new Text('Shovel Upgrade = 200 Iron + 100 Wood');
let mat12 = new Text('Oil Mine = 1000 Iron');
let mat13 = new Text('Plastic = '+ scr13);
let mat14 = new Text('Computer = 2000 iron + 2000 Plastic');

mat1.hide();
mat2.hide();
mat3.hide();
mat4.hide();
mat5.hide();
mat6.hide();
mat8.hide();
mat9.hide();
mat10.hide();
mat11.hide();
mat12.hide();
mat13.hide();
mat14.hide();

var rowSection = new Section('row');
 var txt1 = new Section('col');
 var btns1 = new Section('col');
 var mats1 = new Section('col');
   rowSection.add(txt1);
   rowSection.add(btns1);
   rowSection.add(mats1);
     txt1.add(beginning);
     txt1.add(text);
     txt1.add(text1);
     txt1.add(text2);
     txt1.add(text3);
     txt1.add(text4);
     txt1.add(text5);
     txt1.add(text6);
     txt1.add(text7);
     txt1.add(text8);
     txt1.add(text9);
     txt1.add(text10);
     txt1.add(text11);
     txt1.add(text12)

     btns1.add(stna1);

     mats1.add(mat);
     mats1.add(mat1);
     mats1.add(mat2);
     mats1.add(mat3);
     mats1.add(mat4);
     mats1.add(mat5);
     mats1.add(mat6);
     mats1.add(mat8);
     mats1.add(mat9);
     mats1.add(mat10);
     mats1.add(mat11);
     mats1.add(mat12);
     mats1.add(mat13);
     mats1.add(mat14);



function stna(){
 scr += 2;
 mat.edit('Stone = ' + scr);
 if (scr == 10){
   text1.show();
   stk1 = new Button('Sticks',stk);
   btns1.add(stk1);
   stnpkax1 = new Button('Stone Pickaxe',stnpkax);
   btns1.add(stnpkax1);
   mat1.show();
   mat2.show();
 }
}
function stnb(){
 scr += 4;
 mat.edit('Stone = ' + scr);
}
function stnc(){
 scr += 6;
 mat.edit('Stone = ' + scr);
}
function stk(){
 scr1 += 2;
 mat1.edit('Sticks = ' + scr1);
}
function stnpkax(){
 if (scr >= 30 && scr1 >= 20 && stnpkax){
   scr2 ++;
   scr -= 30;
   scr1 -=20;
   mat.edit('Stone = ' + scr);
   mat1.edit('Sticks = ' + scr1);
 }
 if (scr2 == 1){
   stna1.remove();
   stnb1 = new Button('Stone',stnb);
   btns1.add(stnb1);
   stnpkax1.remove();
   text2.show();
   text3.show();
   mat3.show();
   mat2.remove();
   smltr1 = new Button('Smelter',smltr);
   btns1.add(smltr1);
 }
}
function smltr(){
 if (scr >= 100 && smltr){
   scr3 ++;
   scr -= 100;
   mat.edit('Stone = ' + scr);
 }
 if (scr3 == 1){
   text4.show();
   mat4.show();
   mat3.remove();
   smltr1.remove();
   stnax1 = new Button('Stone Axe',stnax);
   btns1.add(stnax1);
 }
}
function stnax(){
 if (scr >= 60 && scr1 >= 40 && stnax){
   scr4 ++;
   scr -= 60;
   scr1 -= 40;
   mat.edit('Stone = ' + scr);
   mat1.edit('Sticks = ' + scr1);
 }
 if (scr4 == 1){
   text5.show();
   text6.show();
   wda1 = new Button('Wood',wda);
   btns1.add(wda1);
   stnax1.remove();
   mat4.remove()
   mat5.show();
   text7.show();
   stk1.remove();
   mat1.remove();
   mat6.show();
   stnshvl1 = new Button('Stone Shovel',stnshvl);
   btns1.add(stnshvl1);
 }
}
function wda(){
 scr5 += 4;
 mat5.edit('Wood = ' + scr5);
}
function wdb(){
 scr5 += 8;
 mat5.edit('Wood = ' + scr5);
}
function stnshvl(){
 if (scr >= 60 && scr5 >= 50 && stnshvl){
   scr6 ++;
   scr -= 60;
   scr5 -= 50;
   mat.edit('Stone = ' + scr);
   mat5.edit('Wood = ' + scr5);
 }
 if (scr6 == 1){
   text8.show();
   text9.show();
   mat8.show();
   mat6.remove();
   mat9.show();
   mat10.show();
   mat11.show();
   text10.show();
   mat12.show();
   stnshvl1.remove();
   irna1 = new Button('Iron',irna);
   irnpkax1 = new Button('Iron Pickaxe',irnpkax);
   irnax1 = new Button('Iron Axe',irnax);
   irnshvl1 = new Button('Iron Shovel',irnshvl);
   olmne1 = new Button('Oil Mine',olmne);
   btns1.add(irna1);
   btns1.add(irnpkax1);
   btns1.add(irnax1);
   btns1.add(irnshvl1);
   btns1.add(olmne1);
 }
} 
function irna(){
 scr8 += 2;
 mat8.edit('Iron = ' + scr8);
 }
function irnb(){
 scr8 += 4;
 mat8.edit('Iron = ' + scr8);
}
function irnc(){
 scr8 += 100;
 mat8.edit('Iron = ' + scr8);
}
function irnpkax(){
 if (scr8 >= 200 && scr5 >= 100 && irnpkax){
   scr9 ++;
   scr9a ++;
   scr8 -= 200;
   scr5 -= 100;
   mat5.edit('Wood = ' + scr5);
   mat8.edit('Iron = ' + scr8);
 }
 if (scr9a == 1){
   stnb1.remove();

   mat9.remove();
   irnpkax1.remove();
 }
 if (scr9 == 1){
  irna1.remove();
  irnb1 = new Button('Iron',irnb);
  btns1.add(irnb1);
 }
 if (scr9 == 2){
  irnb1.remove();
  irnc1 = new Button('Iron',irnc);
  btns1.add(irnc1);
 }
}
function irnax(){
 if (scr8 >= 200 && scr5 >= 100 && irnax){
   scr10 ++;
   scr8 -= 200;
   scr5 -= 100;
   mat5.edit('Wood = ' + scr5);
   mat8.edit('Iron = ' + scr8);
 }
 if (scr10 == 1){
   mat10.remove();
   wdb1 = new Button('Wood',wdb);
   btns1.add(wdb1);
   wda1.remove();
   irnax1.remove();
 }
}
function irnshvl(){
 if (scr8 >= 200 && scr5 >= 100 && irnshvl){
   scr9 += 1;
   scr11 ++;
   scr8 -= 200;
   scr5 -= 100;
   mat5.edit('Wood = ' + scr5);
   mat8.edit('Iron = ' + scr8);
 }
 if (scr11 >= 1){
   mat11.remove();
   irnshvl1.remove();
 }
 if (scr9 == 1){
  irna1.remove();
  irnb1 = new Button('Iron',irnb);
  btns1.add(irnb1);
 }
 if (scr9 == 2){
  irnb1.remove();
  irnc1 = new Button('Iron',irnc);
  btns1.add(irnc1);
 }
}
function olmne(){
 if (scr8 >= 1000 && olmne){
   scr12 ++;
   scr8 -= 1000;
   mat8.edit('Iron = ' + scr8);
 }
 if (scr12 == 1){
   mat13.show();
   mat12.remove();
   olmne1.remove();
   plstic1 = new Button('Plastic',plstic);
   btns1.add(plstic1);
   wdb1.remove();
   text11.show();
   text12.show();
   pc1 = new Button('Computer',pc);
   btns1.add(pc1);
   mat14.show();
 }
}
function plstic(){
 scr13 += 1000;
 mat13.edit('Plastic' + scr13);
}
function pc(){
 if (scr8 >= 2000 && scr13 >= 2000 && plstic){
   scr14 ++;
   scr8 -= 2000;
   scr13 -= 2000;
 }
 if (scr14 == 1){
   beginning.remove();
   text.remove();
   text1.remove();
   text2.remove();
   text3.remove();
   text4.remove();
   text5.remove();
   text6.remove();
   text7.remove();
   text8.remove();
   text9.remove();
   text10.remove();
   text11.remove();
   text12.remove();
   irnc1.remove();
   plstic1.remove();
   pc1.remove();
   mat.remove();
  
   mat5.remove();
   mat8.remove();
   mat13.remove();
   mat14.remove();
   end = new Title('You Win!');
   end2 = new Text('But you realized that it was all a dream haha you scrub');
 }
}
