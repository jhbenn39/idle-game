var score = 1; // Create a variable to store the score in

var title1 = new Title('Dont touch the button'); // Create a title element
var button = new Button('Button', btnPress);   // Create a button element
                 // Create a text element


changeTitle('Clicker Game');

function btnPress() {
  score++; 
  if (score == 2){
    title1.hide();
    button.hide();
    var title2 = new Title("Dont touch the butt");
    var button1 = new Button('Butt', btn1Press);
  }
}
function btn1Press() {
  score++;
  if (score == 3){
    title2.hide();
    var title3 = new Title("Why you touch ma butt");
  }
}
function btn2Press() {
  score++;
  if (score == 4){
    title3.hide();
    button1.hide();
    var title4 = new Title("This is sexual harrasment im calling the po po");
    var button2 = new Button("No don't call the po po", btn2Press);
  }
}



