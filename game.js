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
var text = new Text('get some stone to start your journey')
var text1 = new Text('Stone = ' + scr)
var text2 = new Text('Great! Now you should grab some sticks to make a stone pickaxe')
var text3 = new Text('Sticks = ' + scr1)
var text4 = new Text('Stone Pickaxe = ' + scr2)
var text5 = new Text('Now you can get stone more quickly')
var text6 = new Text('You can now make a smelter')
var text7 = new Text('Smelter upgrades = ' + scr3)
var text8 = new Text('upgrade your smelter to smelt your iron faster')
var text9 = new Text('Make a stone axe to get wood for your smelter')
var text10 = new Text('Stone Axe = ' + scr4)
var text11 = new Text('Wood = ' + scr5)
var text12 = new Text('You can now find iron but you cant smelt it into anything')
var text13 = new Text("You find some clay but you can't get it because you need a shovel to get it")
var text14 = new Text('Make a shovel')
var text15 = new Text('Stone Shovel = ' + scr6)
var text16 = new Text('you can now get clay')
var text17 = new Text('Clay = ' + scr7)
var text18 = new Text('you can now make iron tools to get materials efficiently')
var text19 = new Text('Iron = ' + scr8)
var text20 = new Text('Pickaxe upgrade = ' + scr2)
var text21 = new Text('Axe upgrade = ' + scr4)
var text22 = new Text('Shovel upgrade = ' + scr6)


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

function btnprs(){
  scr ++;
  text1.edit('Stone = ' + scr);
}
function btn1prs(){
  scr1 ++;
  text3.edit('Sticks = ' + scr1);
}
function btn2prs(){
  scr2 ++;
  text4.edit('Stone Pickaxe = ' + scr2);
}
function btn3prs(){
  scr3 ++;
  text7.edit('Smelter upgrades = ' + scr3);
}
function btn4prs(){
  scr4 ++;
  text10.edit('Stone Axe = ' + scr4);
}
function btn5prs(){
  scr5 ++;
  text11.edit('Wood = ' + scr5);
}
function btn6prs(){
  scr6 ++;
  text15.edit('Stone Shovel = ' + scr6);
}
function btn7prs(){
  scr7 ++;
  text17.edit('Clay = ' + scr7);
}
function btn8prs(){
  scr8 ++;
  text19.edit('Iron = ' + scr8);
}
function btn9prs(){
  scr9 ++;
  text20.edit('Iron Pickaxe = ' + scr9);
}
function btn10prs(){
  scr10 ++;
  text21.edit('Iron Axe = ' + scr10);
}
function btn11prs(){
  scr11 ++;
  text22.edit('Iron Shovel = ' + scr11);
}