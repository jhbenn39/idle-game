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
let end = new Title('You Win!');
let end2 = new Text('But you realized that it was all a dream haha you scrub');

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
end.hide();
end2.hide();

var buttona = new Button('Stone',stna);
let buttonb = new Button('Stone',stnb);
let buttonc = new Button('Stone',stnc);
let button1 = new Button('Sticks',stk);
let button2 = new Button('Stone Pickaxe',stnpkax);
let button3 = new Button('Smelter',smltr);
let button4 = new Button('Stone Axe',stnax);
let button5a = new Button('Wood',wda);
let button5b = new Button('Wood',wdb);
let button6 = new Button('Stone Shovel',stnshvl);
let button8a = new Button('Iron',irna);
let button8b = new Button('Iron',irnb);
let button8c = new Button('Iron',irnc);
let button9 = new Button('Iron Pickaxe',irnpkax);
let button10 = new Button('Iron Axe',irnax);
let button11 = new Button('Iron Shovel',irnshvl);
let button12 = new Button('Oil Mine',olmne)
let button13 = new Button('Plastic',plstic)
let button14 = new Button('Computer',pc)

buttonb.hide();
buttonc.hide();
button1.hide();
button2.hide();
button3.hide();
button4.hide();
button5a.hide();
button5b.hide();
button6.hide();
button8a.hide();
button8b.hide();
button8c.hide();
button9.hide();
button10.hide();
button11.hide();
button12.hide();
button13.hide();
button14.hide();

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
let mat14 = new Text('Computer = 10000 iron + 10000 Plastic');

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

     btns1.add(buttona);
     btns1.add(buttonb);
     btns1.add(buttonc);
     btns1.add(button1);
     btns1.add(button2);
     btns1.add(button3);
     btns1.add(button4);
     btns1.add(button5a);
     btns1.add(button5b);
     btns1.add(button6);
     btns1.add(button8a);
     btns1.add(button8b);
     btns1.add(button8c);
     btns1.add(button9);
     btns1.add(button10);
     btns1.add(button11);
     btns1.add(button12);
     btns1.add(button13);
     btns1.add(button14);

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
   button1.show();
   button2.show();
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
   buttona.remove();
   buttonb.show();
   button2.remove();
   text2.show();
   text3.show();
   mat3.show();
   mat2.remove();
   button3.show();
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
   button3.remove();
   button4.show();
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
   button5a.show();
   button4.remove();
   mat4.remove()
   mat5.show();
   text7.show();
   button1.remove();
   mat1.remove();
   mat6.show();
   button6.show();
 }
}
function wda(){
 scr5 += 4;
 text5.show();
 text6.show();
 text7.show();
 mat5.edit('Wood = ' + scr5);
 button6.show();
 mat6.show();
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
   button8a.show();
   button6.remove();
   button9.show();
   button10.show();
   button11.show();
   button12.show();
   mat12.show();
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
 scr8 += 10;
 mat8.edit('Iron = ' + scr8);
}
function irnpkax(){
 if (scr8 >= 200 && scr5 >= 100 && irnpkax){
   scr9 ++;
   scr8 -= 200;
   scr5 -= 100;
   mat5.edit('Wood = ' + scr5);
   mat8.edit('Iron = ' + scr8);
 }
 if (scr9 == 1){
   buttonb.remove();
   buttonc.show();
   button8a.remove();
   button8b.show();
   mat9.remove();
   button9.remove();
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
   button5b.show();
   button5a.remove();
   button10.remove();
 }
}
function irnshvl(){
 if (scr8 >= 200 && scr5 >= 100 && irnshvl){
   scr11 ++;
   scr8 -= 200;
   scr5 -= 100;
   mat5.edit('Wood = ' + scr5);
   mat8.edit('Iron = ' + scr8);
 }
 if (scr11 >= 1){
   mat11.remove();
   button11.remove();
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
   button12.remove();
   button13.show();
   text11.show();
   text12.show();
   button14.show();
   mat14.show();
 }
}
function plstic(){
 scr13 += 10;
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
   buttonc.remove();
   button1.remove();
   button5b.remove();

   button8b.remove();
   button13.remove();
   button14.remove();
   button11.remove();
   mat.remove();
   mat1.remove();
   mat5.remove();

   mat8.remove();
   mat13.remove();
   mat14.remove();
   end.show();
   end2.show();
 }
}

