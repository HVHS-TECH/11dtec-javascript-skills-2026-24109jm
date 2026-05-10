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
    const CHOCOLATE_FIELD = document.getElementById("chocolate");
    const CHIPS_FIELD = document.getElementById("chips");
    const DRINK_FIELD = document.getElementById("drink");
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
    let afford;

    let chocolateArray = ["You HATE chocolate 😭", "You really don’t like chocolate.", "You’re not much of a chocolate person.", "You dislike chocolate slightly more than you like them.", "You feel neutral about chocolate.", "You kinda like chocolate.", "You’re a chocolate fan.", "You really love chocolate!", "You’re obsessed with chocolate 😍", "You LIVE for chocolate 🍫✨"]
    let chipsArray = ["You HATE chips 😭", "You really don’t like chips.", "You’re not much of a chips person.", "You dislike chips slightly more than you like them.", "You feel neutral about chips.", "You kinda like chips.", "You’re a chips fan.", "You really love chips!", "You’re obsessed with chips 😍", "You LIVE for chips 🍟✨"]
    let drinkArray = ["You HATE drinks 😭", "You really don’t like drinks.", "You’re not much of a drinks person.", "You dislike drinks slightly more than you like them.", "You feel neutral about drinks.", "You kinda like drinks.", "You’re a drinks fan.", "You really love drinks!", "You’re obsessed with drinks 😍", "You LIVE for drinks 🥤✨"]

    /****************************
    Main Code
    ****************************/

    if (!hadBirthday) age--;

    console.log("Running t14_arrays_1.js");

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
        OUTPUT.innerHTML += "<br>";
    }

    function calculateChange(_money, _price) {
        let change = _money - _price
        if (afford === "You can afford the ") {
            OUTPUT.innerHTML += "<p>If you buy it, you will get $"+ change +" change.</p>"
        } else {
            OUTPUT.innerHTML += "<p></p>"
        }
    }

    function like(array, field) {
        OUTPUT.innerHTML += "<p>" + array[Number(field.value) - 1] + "</p>";
        OUTPUT.innerHTML += "<br>"
    }
    
    function displayProduct(_name, _price, array, field) {
        if (money >= _price) {
            afford = "You can afford the "
        } else {
            afford = "Sorry, you can not afford the "
        };
        OUTPUT.innerHTML += "<p>"+ _name +": $"+ _price +"</p>";
        OUTPUT.innerHTML += "<p> The "+ _name +" costs $"+ _price +". "+ afford + _name +" "+ getFace(money, _price)+ " </p>";
        calculateChange(money, _price)
        like(array, field)
    }

    OUTPUT.innerHTML = "<p>Hi, "+ name +".</p>"
    OUTPUT.innerHTML += "<p>As of "+ year +", you are "+ age +" years old.</p>";
    OUTPUT.innerHTML += "<p>You were born in "+ yearBorn +".</p>";
    OUTPUT.innerHTML += "<p>In 10 years, you will be "+ (age + 10) +" years old.</p>";
    OUTPUT.innerHTML += "<p>You have $"+ money + " "+ getFace(money, 100) +" </p>";
    OUTPUT.innerHTML += "<p>If you spend half of your money, you will have $"+ (money / 2) +" "+ getFace(halfMoney, 100) +"</p>";
    OUTPUT.innerHTML += "<p>If you get $3 after spending half your money, you will have $"+ (money / 2 + 3) +" "+ getFace(halfMoney3, 100) +"</p>";
    welcome();
    displayProduct("Chocolate bar", 4, chocolateArray, CHOCOLATE_FIELD)
    displayProduct("Chips", 3, chipsArray, CHIPS_FIELD)
    displayProduct("Drink", 2.50, drinkArray, DRINK_FIELD)
}