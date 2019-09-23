var scr1 = 0; // Create a variable to store the score in

var beginning = new Text('You are all alone in your little world with no civilization and you have to make a computer to get back to people.');
var text1 = new Text('get some stone to start your journey')
var text2 = new Text('Great! Now you should grab some sticks to make a stone pickaxe')
var text2 = new Text('Now you can get stone more quickly')

var button = new Button('Stone',btnprs);
var button1 = new Button('Sticks',btn1prs);
var button2 = new Button('Stone Pickaxe',btn3prs);



function btnprs(){
  scr1 ++;
}