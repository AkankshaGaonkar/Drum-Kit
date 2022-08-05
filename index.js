//ADDING EVENT LISTENERS TO A BUTTON
// var noofdrumbutton = document.querySelectorAll(".set").length;
// for(var i=0;i<noofdrumbutton;i++)
// {
//     document.querySelectorAll(".set")[i].addEventListener("click",listner);
// }
// function listner()
// {
//     alert("Button is clicked");
// }

//HIGHER ORDER FUNCTIONS AND PASSING FUNCTIONS AS ARGUMENTS
//function substact(num1,num2)
// {
//     return num1-num2;
// }
// function calculator(num1,num2,operator)
// {
//     return operator(num1, num2);
// }
// undefined
// calculator(4,6,substact);
// -2
// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }

//A DEEPER UNDERSTANDING OF JS OBJ
// function HouseKeeper(name,experience,cleaningRepertoire)
// {
//     this.name=name;
//     this.experience=experience;
//     this.cleaningRepertoire=cleaningRepertoire;
// }
// var housekeeper1=new HouseKeeper("Timmy",12,["bedroom","washroom"]);

//Switch Statements in js
var buttonInnerHtml = this.innerHtml;
switch(buttonInnerHtml){
    case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
    case "a":
        var kick = new Audio('sounds/kick.mp3');
        kick.play();
        break;
    default:
}