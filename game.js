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
let text11 = new Text('You can now make plastic')
let text12 = new Text('If you have enough plastic and iron you can make a computer')

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

var buttona = new Button('Stone',btnaprs);
let buttonb = new Button('Stone',btnbprs);
let buttonc = new Button('Stone',btncprs);
let button1 = new Button('Sticks',btn1prs);
let button2 = new Button('Stone Pickaxe',btn2prs);
let button3 = new Button('Smelter',btn3prs);
let button4 = new Button('Stone Axe',btn4prs);
let button5a = new Button('Wood',btn5aprs);
let button5b = new Button('Wood',btn5bprs);
let button6 = new Button('Stone Shovel',btn6prs);
let button7a = new Button('Clay',btn7aprs);
let button7b = new Button('Clay',btn7bprs);
let button8a = new Button('Iron',btn8aprs);
let button8b = new Button('Iron',btn8bprs);
let button9 = new Button('Iron Pickaxe',btn9prs);
let button10 = new Button('Iron Axe',btn10prs);
let button11 = new Button('Iron Shovel',btn11prs);
let button12 = new Button('Oil Mine',btn12prs)
let button13 = new Button('Plastic',btn13prs)
let button14 = new Button('Computer',btn14prs)

buttonb.hide();
buttonc.hide();
button1.hide();
button2.hide();
button3.hide();
button4.hide();
button5a.hide();
button5b.hide();
button6.hide();
button7a.hide();
button7b.hide();
button8a.hide();
button8b.hide();
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
let mat7 = new Text('Clay = ' + scr7);
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
mat7.hide();
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
      btns1.add(button7a);
      btns1.add(button7b);
      btns1.add(button8a);
      btns1.add(button8b);
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
      mats1.add(mat7);
      mats1.add(mat8);
      mats1.add(mat9);
      mats1.add(mat10);
      mats1.add(mat11);
      mats1.add(mat12);
      mats1.add(mat13);
      mats1.add(mat14);

function btnaprs(){
  scr ++;
  mat.edit('Stone = ' + scr);
  if (scr == 10){
    text1.show();
    button1.show();
    button2.show();
    mat1.show();
    mat2.show();
  }
}
function btnbprs(){
  scr += 2;
  mat.edit('Stone = ' + scr);
}
function btncprs(){
  scr += 4;
  mat.edit('Stone = ' + scr);
}
function btn1prs(){
  scr1 ++;
  mat1.edit('Sticks = ' + scr1);
}
function btn2prs(){
  if (scr == 30 && scr1 == 20 && button2.down()){
    scr2 ++;
    scr -= 30;
    scr1 -=20;
  }
  if (scr2 == 1){
    buttona.remove();
    buttonb.show();
    button2.remove();
    text2.show();
    text3.show();
    mat3.show();
    mat2.remove();
  }
}
function btn3prs(){
  if (scr == 100 && button3.down()){
    scr3 ++;
    scr -= 100;
  }
  if (scr3 == 1){
    text4.show();
    mat4.show();
    mat3.remove();
    button3.remove();
  }
}
function btn4prs(){
  if (scr == 60 && scr1 == 40 && button4.down()){
    scr4 ++;
    scr -= 60;
    scr1 -= 40;
  }
  if (scr4 == 1){
    text5.show();
    text6.show();
    button5a.show();
    button4.remove();
    mat4.remove()
    mat5.show();
    text7.show();
  }
}
function btn5aprs(){
  scr5 += 4;
  mat5.edit('Wood = ' + scr5);
}
function btn5bprs(){
  scr5 += 8;
  mat5.edit('Wood = ' + scr5);
}
function btn6prs(){
  if (scr == 60 && scr5 == 50 && button6.down()){
    scr6 ++;
    scr -= 60;
    scr5 -= 50;
  }
  if (scr6 == 1){
    text8.show();
    text9.show();
    mat7.show();
    mat8.show();
    mat6.remove();
    mat9.show();
    mat10.show();
    mat11.show();
    text10.show();
    button8a.show();
  }
}
function btn7aprs(){
  scr7 ++;
  mat7.edit('Clay = ' + scr7);
}
function btn7bprs(){
  scr7 += 2;
  mat7.edit('Clay = ' + scr7);
}
function btn8aprs(){
  scr8 ++;
  mat8.edit('Iron = ' + scr8);
}
function btn8bprs(){
  scr8 += 4;
  mat8.edit('Iron = ' + scr8);
}
function btn9prs(){
  if (scr8 == 200 && scr5 == 100 && button9.down()){
    scr9 ++;
    scr8 -= 200;
    scr5 -= 100;
  }
  if (scr9 == 1){
    buttonb.remove();
    buttonc.show();
    button8a.remove();
    button8b.show();
    mat9.remove();
  }
}
function btn10prs(){
  if (scr8 == 200 && scr5 == 100 && button10.down()){
    scr10 ++;
    scr8 -= 200;
    scr5 -= 100;
  }
  if (scr10 == 1){
    mat10.remove();
    button5b.show();
    button5a.remove();
  }
}
function btn11prs(){
  if (scr8 == 200 && scr5 == 100 && button11.down()){
    scr11 ++;
    scr8 -= 200;
    scr5 -= 100;
  }
  if (scr10 == 1){
    mat11.remove();
    button7b.show();
    button7a.remove();
  }
}
function btn12prs(){
  if (scr8 == 1000 && button12.down()){
    scr12 ++;
    scr8 -= 1000;
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
function btn13prs(){
  scr13 += 4;
}
function btn14prs(){
  if (scr8 == 10000 && scr13 == 10000 && button14.down()){
    scr14 ++;
    scr8 -= 10000;
    scr13 -= 10000;
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
    button7b.remove();
    button8b.remove();
    button13.remove();
    button14.remove();
    mat.remove();
    mat1.remove();
    mat5.remove();
    mat7.remove();
    mat8.remove();
    mat13.remove();
    mat14.remove();
  }
}
