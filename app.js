// var display = document.getElementById("inputBox");
// var buttons = document.querySelectorAll("button");

// var buttonsArray = Array.from(buttons);

// var string = "";

// buttonsArray.forEach(btn => {

//     btn.addEventListener("click", (e) => {
//         if (e.target.innerHTML == "DEL") {
//             string = string.substring(0, string.length - 1);
//             display.value = string;
//         }
//          else if (e.target.innerHTML == "AC") {
//             string = "";
//             display.value = string;
//         }
//          else if (e.target.innerHTML == "=") {
//             string = eval(string);
//             display.value = string;
//         }
//          else {
//             string += e.target.innerHTML;
//             display.value = string;
//         }
//     });

// });



var display = document.getElementById("inputBox");

function setNumber(num) {
    var lastValue = display.value.slice(display.value.length - 1);

    var operators = ["+", "-", "/", "*"];

    if (operators.indexOf(lastValue) !== -1 && operators.indexOf(num) !== -1) {
        display.value = display.value.slice(0, -1) + num;
    }
    else {
        display.value += num;
    }
}

function clearResult() {
    display.value = "";
}

function result() {
    if (eval(display.value) === undefined) {
        display.value += num;
    }
    display.value = eval(display.value);
}

function del() {
    display.value = display.value.slice(0, display.value.length - 1)
}


