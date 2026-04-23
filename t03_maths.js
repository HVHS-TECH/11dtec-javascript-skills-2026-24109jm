/****************************
Variables
****************************/

/****************************
Variables
****************************/

let name = "Jay";
let age = 15;
let money = 194;
let halfMoney = money / 2;
let halfMoney3 = halfMoney + 3;
let year = 2026;
let face;

/****************************
Main Code
****************************/

console.log("Running t02_introduction.js");

function getFace(ammount) {
    if (ammount >= 100){
        return ":)";
    } else {
        return ":(";
    }
};

console.log("Hi, "+ name +".");
console.log("As of "+ year +", you are "+ age +" years old.");
console.log("You were born in ", year - age,".");
console.log("In 10 years, you will be ", age + 10 ,"years old.");
console.log("You have $"+ money + " " + getFace(money));
console.log("If you spend half of your money, you will have $", money / 2," "+ getFace(halfMoney));
console.log("If you get $3 after spending half your money, you will have $", money / 2 + 3," "+ getFace(halfMoney3));
