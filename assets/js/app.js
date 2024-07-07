document.addEventListener('DOMContentLoaded', function () {
    var skillCloseIcons = document.querySelectorAll('.skill-close');
    skillCloseIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            this.parentElement.style.display = 'none';
        });
    });
});

function shutdowen() {
    var btn = document.getElementById('close-box');
    btn.style.display = 'none';
}





























// Assignment 1
/*
alert("Welcome to my site")
var name =prompt("Enter your name")
document.write("Welcome again " + name)
*/
/*
// Assignment  2
function sum(num1 , num2){
    return num1 + num2
}
var x= prompt("Enter First Number")
var y= prompt("Enter Second Number")
document.write("the result is " + sum(Number(x) , Number(y)))
*/
// Assignment 3
/*
function temperatue(){
    var temp = prompt("Enter the temperature in Celsius")
    return temp>=30? alert("Hot") : alert("Cold")
}
temperatue()
*/
// Assignment 4
/*
function temperature(feel, temp) {
    if (feel >= 25 && feel <= 30 && temp >= 25 && temp <= 30) {
        alert("normal");
    } else if (feel < 25 && temp < 25) {
        alert("cold");
    } else if (feel > 30 && temp > 30) {
        alert("hot");
    } else {
        alert("Ambiguous, can't detect");
    }
}
var temp = prompt("Enter weather temperature")
var feel = prompt("Enter your actual feel temperature")
temperature(feel, temp)
*/
