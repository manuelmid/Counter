var dateString = new Date().toLocaleDateString();
var input = document.querySelector(".input-12");//Añadir aqui el input
var botones = document.querySelectorAll("button");


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


for( i = 0 ; i < botones.length ; i++ ){ botones[i].style.width = "100px"; botones[i].style.height = "100px"};

document.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        listener();
    }

    //console.log(e);

});

