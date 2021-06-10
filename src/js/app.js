
function addNumbers() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    if (number1 > 100 || number1 < 1 || number2 > 100 || number2 < 1) {
        document.getElementById("msg").style.display = "inline";
        document.getElementById("answer").value = "Error"
    }
    else {
        document.getElementById("msg").style.display = "none"
        document.getElementById("answer").value = number1 + number2;
}
}