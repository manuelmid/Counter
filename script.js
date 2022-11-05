var dateString = new Date().toLocaleDateString();
var input = document.querySelector("");//

var listener = function(e) {
    var currentValue = localStorage.getItem(dateString);
    var inputNm = parseFloat(input.value);
        console.log(inputNm);
        if(inputNm){

            if (currentValue) {
                var currentValueParsed = parseInt(currentValue);
                currentValueParsed += inputNm;
                localStorage.setItem(dateString, currentValueParsed);
            }
            else {
                localStorage.setItem(dateString, inputNm);
            }

        };
};

document.addEventListener("keydown", function(e){

    if(e.key === "Enter"){
        listener();
    }
    console.log('move')
});

