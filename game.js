var score = 1; // Create a variable to store the score in

var title = new Title('Dont touch the button'); // Create a title element
var title1 = new Title("Dont touch the butt");
var title2 = new Title("Why you touch ma butt");
var title3 = new Title("This is sexual harrasment im calling the po po");

var button = new Button('Button', btnPress);
var button1 = new Button('Butt', btn1Press);
var button2 = new Button("No don't call the po po", btn2Press);   // Create a button element
                 // Create a text element
                 title1.hide();
                 title2.hide();
                 title3.hide();



function btnPress() {
  score++; 
  if (score == 2){
    title.hide();
    title1.show();
    button.hide();
    
    
  }
}
function btn1Press() {
  score++;
  if (score == 3){
    title1.hide();
   
  }
}
function btn2Press() {
  score++;
  if (score == 4){
    title2.hide();
    button1.hide();
   
    
  }
}



