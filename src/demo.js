$(document).ready(function () {
    ex();
});

function ex1() {
    var bank = 1000;
    var wallet = 100;

    withdraw(50);
    deposit(50);

    function withdraw(amount_of_money) {
        if (bank <= 0) {
            console.log("Bank is empty");
        } else {
            bank = bank - amount_of_money;
            wallet = wallet + amount_of_money;
            console.log("bank=[" + bank + "] , wallet=[" + wallet + "]");
        }
    }

    function deposit(amount_of_money) {
        bank = bank + amount_of_money;
        wallet = wallet - amount_of_money;
        console.log("bank=[" + bank + "] , wallet=[" + wallet + "]");
    }
}

function ex2() {
    $('#button').click(function () {
        var value = $('#Text-Input').val();
        alert(value);
    })

    $('#Text-Input').change(function () {
        $('#Header-Value').text($('#Text-Input').val());
    })
}

function ex3() {
    var rnd = Math.floor((Math.random() * 5) + 1);
    console.log(rnd);
    var guesses = 0;

    guess(0);
    guess(1);
    guess(2);
    guess(3);
    guess(4);

    function guess(number) {
        if (number == rnd) {
            console.log("you guessed the random number");
            console.log("guesses[" + guesses + "]");
        } else {
            guesses++;
            console.log("keep on guessing");
        }
    }
}

function ex4() {
    var shoppingCart = [];

    function addTocart(name, price) {
        shoppingCart[name] = price;
    }

    function priceCheck(name) {
        var price = shoppingCart[name];
        if (price == undefined) {
            console.log("Can't find");
        } else {
            console.log(price);
        }

    }

    function totalPriceCheck() {
        console.log(shoppingCart)
    }


    addTocart("apple", 3);
    addTocart("orange", 5);
    addTocart("banana", 4);

    priceCheck("apple");
    priceCheck("orange");
    priceCheck("kiwi");

    totalPriceCheck();

}

function ex5() {
    var arr = [4, 6, 2, 7, 8, 2];
    var max = arr[0];
    var arr_size = arr.length;
    for (var i = 0; i < arr_size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    console.log(max);
}

function ex6() {
    var arr = [5, 6, 2, 4, 9, 3];
    var min = arr[0];
    var arr_size = arr.length;
    for (var i = 0; i < arr_size; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

    }
    console.log(min);
}

function ex7() {
    var arrCurr = [4, 6, 8, 3, 4, 7, 8, 2, 4];
    var hash = [];
    var max = 0;
    for (var i = 0; i < arrCurr.length; i++) {
        var key = arrCurr[i],
            value = hash[arrCurr[i]];
        console.log("key[" + key + "]=" + value);
        if (value == null) {
            console.log("value==null");
            hash[key] = 0;
        } else {
            var num = hash[key];
            hash[key] = ++num;
            console.log("hash[" + key + "]=" + num);

            if (num > max) {
                max = key;
            }
        }

    }

    console.log("max = " + max);
}