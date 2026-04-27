/****************************
JavaScript and HTML
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
    (day.getMonth() + 1 === birthMonth && day.getDate() >= birthDay);
let birthYear = year - age - (hadBirthday ? 0 : 1);
let face;

/****************************
Main Code
****************************/

console.log("Running t05_JavaScript_and_HTML.js");

function getFace(ammount) {
    if (ammount >= 100){
        return ":)";
    } else {
        return ":(";
    }
};

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<p>Hi, "+ name +".</p>"
OUTPUT.innerHTML += "<p>As of "+ year +", you are "+ age +" years old.</p>";
OUTPUT.innerHTML += "<p>You were born in "+ birthYear +".</p>";
OUTPUT.innerHTML += "<p>In 10 years, you will be "+ (age + 10) +" years old.</p>";
OUTPUT.innerHTML += "<p>You have $"+ money + " "+ getFace(money) +" </p>";
OUTPUT.innerHTML += "<p>If you spend half of your money, you will have $"+ (money / 2) +" "+ getFace(halfMoney) +"</p>";
OUTPUT.innerHTML += "<p>If you get $3 after spending half your money, you will have $"+ (money / 2 + 3) +" "+ getFace(halfMoney3) +"</p>";
