var displayDiv = document.querySelector("#display");
console.log(displayDiv.innerText);
var a = "";
var op = "";
var equal;
function press(x) {
    a = a + x;
    displayDiv.innerText = a;
}
function setOP(set) {
    op = set;
    equal = parseFloat(a);
    a = "";
}
function calculate() {
    if (op == "+") {
        equal = equal + parseFloat(a);
    }
    else if (op == "-") {
        equal = equal - parseFloat(a);
    }
    else if (op == "*") {
        equal = equal * parseFloat(a);
    }
    else if (op == "/") {
        equal = equal / parseFloat(a);
    }
    displayDiv.innerText = equal;
    a = equal;
}
function clr() {
    displayDiv.innerText = 0;
    a = "";
    op = "";
    equal = "";
}