var dateString = new Date().toLocaleDateString();
var input = document.getElementById("inp");
var boton = document.getElementById("boton");


var listener = function(e) {
    var currentValue = localStorage.getItem(dateString);

    if (currentValue) {
        var currentValueParsed = parseInt(currentValue);
        var inputNm = parseFloat(input.value);
        currentValueParsed += inputNm;
        localStorage.setItem(dateString, currentValueParsed);
    } else {
        localStorage.setItem(dateString, 1);
    }
}

//document.addEventListener("click", listener);

boton.addEventListener("click", listener)