window.onload = function () {};


var h1 = document.querySelector("h1");
var button = document.getElementById("enter");
var items = document.getElementById("items");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var body = document.querySelector("body");
var counter = 0;
var minusCount = 0;
var shops = [];

function start() {
    if (shops.length == 0) {
        document.getElementById("amountMinus").innerHTML = "";
        document.getElementById("amount").innerHTML = "";
        document.getElementById("container1").classList.replace("container11", "container1");

    }
}
function itemLength() {
    return items.value.length;
}

function checkListLength() {
    return document.getElementsByTagName("li").length;
}

function createListElement() {
    var li = document.createElement("li");
    ul.appendChild(li);
    var button2 = document.createElement("button");
    li.appendChild(document.createTextNode(items.value));
    li.addEventListener("click", ToggleDone);
    items.value = "";
    button2.className = "button2";
    button2.appendChild(document.createTextNode("Delete"));
    button2.addEventListener("click", DeleteList);
    ul.appendChild(button2);
    button2.setAttribute("id", "removeLi");
    shops.push(document.createTextNode(items.value));


    function DeleteList() {
        if (li.classList.contains("done")) {
            button2.remove();
            li.remove();
            shops.shift(document.createTextNode(items.value));
            minusCount++
            document.getElementById("amountMinus").innerHTML = `<br>you deleted ${minusCount} lists`;
            amount();
            start();
        } else {
            alert("please asign the product that you wanna delete");


        }
    }
    amount();
}



function amount() {
    for (counter = 0; counter <= checkListLength(); ++counter) {
        if (checkListLength() >= counter) {
            document.getElementById("amount").innerHTML = `you create ${counter} lists`;

        }

    }
}

function ToggleDone() {
    this.classList.toggle("done");
    this.classList.toggle("span");
}

function AddListAfterClick() {

    if (!itemLength()) {
        return document.getElementById("err").innerHTML = "<br><br>please contain some product";
    } else if (itemLength() > 0) {
        document.getElementById("container1").classList.replace("container1", "container11");
        createListElement()
        document.getElementById("err").innerHTML = "";

    }
}


function AddListAfterEnter(event) {

    if (!itemLength()) {
        return document.getElementById("err").innerHTML = "<br><br>please contain some product";
    } else if (itemLength() > 0) {
        document.getElementById("err").innerHTML = "";
    }
    if (event.keyCode === 13) {
        document.getElementById("container1").classList.replace("container1", "container11");
        createListElement();
    }
}

document.getElementById("err").innerHTML = "<br><br>please contain some product";



button.addEventListener("click", AddListAfterClick);
items.addEventListener("keypress", AddListAfterEnter);
