/****************************
Conditionals
****************************/

/****************************
Variables
****************************/
function start() {
    const NAME_FIELD = document.getElementById("nameField");
    const BIRTHDAY_FIELD = document.getElementById("birthdayField");
    const MONEY_FIELD = document.getElementById("moneyField");
    let name = NAME_FIELD.value;
    let birthday = BIRTHDAY_FIELD.value;
    let parts = birthday.split("/");
    let day = new Date();
    let dayBorn = parseInt(parts[0]);
    let monthBorn = parseInt(parts[1]) - 1;
    let yearBorn = parseInt(parts[2]);
    let birthDate = new Date(yearBorn, monthBorn, dayBorn);
    birthDate.setFullYear(yearBorn);
    let age = day.getFullYear() - birthDate.getFullYear();
    let money = Number(MONEY_FIELD.value.replace('$', ''));
    let halfMoney = money / 2;
    let halfMoney3 = halfMoney + 3;
    let year = day.getFullYear();
    let hadBirthday =
        (day.getMonth() > monthBorn) ||
        (day.getMonth() === monthBorn && day.getDate() >= dayBorn);

    /****************************
    Main Code
    ****************************/

    if (!hadBirthday) age--;

    console.log("Running t12_conditionals.js");

    function getFace(amount, want) {
        if (amount >= want){
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
        let afford;

        if (money >= _price) {
            afford = "You can afford the "
        } else {
            afford = "Sorry, you can not afford the "
        };
        OUTPUT.innerHTML += "<p>"+ _name +": $"+ _price +"</p>";
        OUTPUT.innerHTML += "<p> The "+ _name +" costs $"+ _price +". "+ afford + _name +" "+ getFace(money, _price)+ "</p>";
    }

    OUTPUT.innerHTML = "<p>Hi, "+ name +".</p>"
    OUTPUT.innerHTML += "<p>As of "+ year +", you are "+ age +" years old.</p>";
    OUTPUT.innerHTML += "<p>You were born in "+ yearBorn +".</p>";
    OUTPUT.innerHTML += "<p>In 10 years, you will be "+ (age + 10) +" years old.</p>";
    OUTPUT.innerHTML += "<p>You have $"+ money + " "+ getFace(money, 100) +" </p>";
    OUTPUT.innerHTML += "<p>If you spend half of your money, you will have $"+ (money / 2) +" "+ getFace(halfMoney, 100) +"</p>";
    OUTPUT.innerHTML += "<p>If you get $3 after spending half your money, you will have $"+ (money / 2 + 3) +" "+ getFace(halfMoney3, 100) +"</p>";
    welcome();
    displayProduct("Chocolate bar", 4)
    displayProduct("Chips", 3)
    displayProduct("Drink", 2.50)
}