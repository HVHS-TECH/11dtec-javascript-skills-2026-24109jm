/****************************
Functions with Parameters
****************************/

/****************************
Variables
****************************/

let name = "Jay";
let age = 15;
let money = 194;
let halfMoney = money / 2;
let halfMoney3 = halfMoney + 3;
let day = new Date();
let year = day.getFullYear();
let birthMonth = 8;
let birthday = 14;
let hadBirthday =
    (day.getMonth() + 1 > birthMonth) ||
    (day.getMonth() + 1 === birthMonth && day.getDate() >= birthday);
let birthYear = year - age - (hadBirthday ? 0 : 1);

/****************************
Main Code
****************************/

console.log("Running t07functions_parameters.js");

function getFace(amount) {
    if (amount >= 100){
        return ":)";
    } else {
        return ":(";
    }
};

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function welcome() {
    OUTPUT.innerHTML += "<br>";
    OUTPUT.innerHTML += "<p>Welcome to the shop!</p>";
}

function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>"+ _name +": $"+ _price +"</p>";
}

OUTPUT.innerHTML = "<p>Hi, "+ name +".</p>"
OUTPUT.innerHTML += "<p>As of "+ year +", you are "+ age +" years old.</p>";
OUTPUT.innerHTML += "<p>You were born in "+ birthYear +".</p>";
OUTPUT.innerHTML += "<p>In 10 years, you will be "+ (age + 10) +" years old.</p>";
OUTPUT.innerHTML += "<p>You have $"+ money + " "+ getFace(money) +" </p>";
OUTPUT.innerHTML += "<p>If you spend half of your money, you will have $"+ (money / 2) +" "+ getFace(halfMoney) +"</p>";
OUTPUT.innerHTML += "<p>If you get $3 after spending half your money, you will have $"+ (money / 2 + 3) +" "+ getFace(halfMoney3) +"</p>";
welcome();
displayProduct("Chocolate bar", 4)
displayProduct("Chips", 3)
displayProduct("Drink", 2.50)