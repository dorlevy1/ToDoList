window.onload = function () {};


var h1 = document.querySelector("h1");
var button = document.getElementById("enter");
var items = document.getElementById("items");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var body = document.querySelector("body");
var container1 = document.getElementById("container1");
var deleteall = document.getElementById("deleteAll");
var checkall = document.getElementById("checkALL");
var counter = 0;
var minusCount = 0;
var shops = [];
var storagee = [];

function start() {
    if (shops.length == 0) {
        document.getElementById("amountMinus").innerHTML = "";
        document.getElementById("amount").innerHTML = "";
        document.getElementById("container1").style.display = 'none';

    }
}
// var container = document.createElement("div");
// container.className = "container";
// body.appendChild(container);
// container.appendChild(document.getElementById("whole"));
// // container.appendChild(document.querySelector("hr"));
// // container.appendChild(h1);
// // container.appendChild(items);
// // container.appendChild(button);
// // container.appendChild(ul);
// // container.appendChild(document.querySelector("div"));
// // container.appendChild(document.querySelector("script"));
// // container.appendChild(document.querySelector("hr"));
// // container.appendChild(li);

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
    deleteall.addEventListener("click", deleteAAll);
    checkall.addEventListener("click", checkALL);

    function DeleteList() {
        if (li.classList.contains("done")) {
            button2.remove();
            li.remove();
            shops.shift(document.createTextNode(items.value));
            minusCount++
            document.getElementById("amountMinus").innerHTML = `<br>you deleted ${minusCount} lists`;
            amount();
            start();
            // start(); // its if i wanna refresh the page .
        } else {
            alert("please asign the product that you wanna delete");


        }
    }

    function checkALL(word) {
        li.classList.toggle("done");
        li.classList.toggle("span");
        return storagee.push(word.value);
    }

    function deleteAAll() {
        if (li.classList.contains("span")) {
            li.remove();
            button2.remove();
            shops.shift(document.createTextNode(items.value));
            document.getElementById("container1").style.display = 'none';
        } else {
            alert("you must check all");
        }


    }
    amount();

}

function ToggleDone() {
    this.classList.toggle("done");
    this.classList.toggle("span");
}





function amount() {
    for (counter = 0; counter <= checkListLength(); ++counter) {
        if (checkListLength() >= counter) {
            document.getElementById("amount").innerHTML = `you create ${counter} lists`;

        }

    }
}



function AddListAfterClick() {

    if (!itemLength()) {
        return document.getElementById("err").innerHTML = "<br><br>please contain some product";
    } else if (itemLength() > 0) {
        document.getElementById("container1").style.display = 'block';
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
        document.getElementById("container1").style.display = 'block';

        createListElement();
    }
    if (checkListLength() >= 10) {
        document.getElementById("deleteAll").style.display = 'block';
        document.getElementById("checkALL").style.display = 'block';

    }
}

function bigScreen() {
    return container1.style.transition = "all 2s ";

}

document.getElementById("deleteAll").style.display = 'none';
document.getElementById("checkALL").style.display = 'none';
document.getElementById("err").innerHTML = "<br><br>please contain some product";
button.addEventListener("click", AddListAfterClick);
items.addEventListener("keypress", AddListAfterEnter);
container1.addEventListener("mouseover", bigScreen);
