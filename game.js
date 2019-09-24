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



var beginning = new Text('You are all alone in your little world with no civilization and you have to make a computer to get back to people.');
var text = new Text('Get some stone to start your journey');
var text1 = new Text('Great! Now you should grab some sticks to make a stone pickaxe');
var text2 = new Text('Now you can get stone more quickly');
var text3 = new Text('You can now make a smelter');
var text4 = new Text('Upgrade your smelter to smelt your iron faster');
var text5 = new Text('Make a stone axe to get wood for your smelter');
var text6 = new Text('You can now find iron but you cant smelt it into anything');
var text7 = new Text("You find some clay but you can't get it because you need a shovel to get it");
var text8 = new Text('Make a stone shovel');
var text9 = new Text('You can now get clay');
var text10 = new Text('You can now make iron tools to get materials efficiently');



var button = new Button('Stone',btnprs);
var button1 = new Button('Sticks',btn1prs);
var button2 = new Button('Stone Pickaxe',btn2prs);
var button3 = new Button('Smelter',btn3prs);
var button4 = new Button('Stone axe',btn4prs);
var button5 = new Button('Wood',btn5prs);
var button6 = new Button('Stone shovel',btn6prs);
var button7 = new Button('Clay',btn7prs);
var button8 = new Button('Iron',btn8prs);
var button9 = new Button('Iron pickaxe',btn9prs);
var button10 = new Button('Iron axe',btn10prs);
var button11 = new Button('Iron shovel',btn11prs);



var mat = new Text('Stone = ' + scr);
var mat1 = new Text('Sticks = ' + scr1);
var mat2 = new Text('Stone Pickaxe = 40 Stone + 20 Sticks');
var mat3 = new Text('Smelter upgrades = ' + scr3);
var mat4 = new Text('Stone Axe = ' + scr4);
var mat5 = new Text('Wood = ' + scr5);
var mat6 = new Text('Stone Shovel = ' + scr6);
var mat7 = new Text('Clay = ' + scr7);
var mat8 = new Text('Iron = ' + scr8);
var mat9 = new Text('Pickaxe upgrade = ' + scr2);
var mat10 = new Text('Axe upgrade = ' + scr4);
var mat11 = new Text('Shovel upgrade = ' + scr6);



var rowSection = new Section();
  var txt = new Section();
  var btns = new Section();
  var mats = new Section();
    rowSection.add(txt);
    rowSection.add(btns);
    rowSection.add(mats);
      txt.add(text);
      txt.add(text1);
      txt.add(text2);
      txt.add(text3);
      txt.add(text4);
      txt.add(text5);
      txt.add(text6);
      txt.add(text7);
      txt.add(text8);
      txt.add(text9);
      txt.add(text10);
      
      btns.add(button);
      btns.add(button1);
      btns.add(button2);
      btns.add(button3);
      btns.add(button4);
      btns.add(button5);
      btns.add(button6);
      btns.add(button7);
      btns.add(button8);
      btns.add(button9);
      btns.add(button10);
      btns.add(button11);
      
      mats.add(mat);
      mats.add(mat1);
      mats.add(mat2);
      mats.add(mat3);
      mats.add(mat4);
      mats.add(mat5);
      mats.add(mat6);
      mats.add(mat7);
      mats.add(mat8);
      mats.add(mat9);
      mats.add(mat10);
      mats.add(mat11);

function btnprs(){
  scr ++;
  mat.edit('Stone = ' + scr);
}
function btn1prs(){
  scr1 ++;
  mat1.edit('Sticks = ' + scr1);
}
function btn2prs(){
  scr2 ++;
  mat2.hide();
}
function btn3prs(){
  scr3 ++;
  mat3.edit('Smelter upgrades = ' + scr3);
}
function btn4prs(){
  scr4 ++;
  mat4.hide();
}
function btn5prs(){
  scr5 ++;
  mat5.edit('Wood = ' + scr5);
}
function btn6prs(){
  scr6 ++;
  mat6.hide();
}
function btn7prs(){
  scr7 ++;
  mat7.edit('Clay = ' + scr7);
}
function btn8prs(){
  scr8 ++;
  mat8.edit('Iron = ' + scr8);
}
function btn9prs(){
  scr9 ++;
  mat9.hide();
}
function btn10prs(){
  scr10 ++;
  mat10.hide();
}
function btn11prs(){
  scr11 ++;
  mat11.hide();
}