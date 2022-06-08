let numEl = document.getElementById("conversion-m")


function convert() {
    // get element form id sel2
    let Base = document.getElementById("sel2").value;
    let Text1 = document.getElementById("inputPut1").value;
    let Text2 = document.getElementById("inputPut2").value;
    let Ope = document.getElementById("sel").value;

    let Num1 = parseInt(Text1, Base);
    let Num2 = parseInt(Text2, Base);
    let result = 0;
    let zeroo = 0;
    if(Ope == "+")
         result = Num1 + Num2;
    if(Ope == "-")
            result = Num1 - Num2;
    if(Ope == "*")
            result = Num1 * Num2;
    if(Ope == "/"){
        if(Num2 == 0){
            zeroo = 1;
            alert("Division by zero is not allowed");
        }
        else
            result = Num1 / Num2;
    }
    let Converted = (result).toString(Base);
    if (zeroo == 1){
        Converted = "<br>"
    }
    if(Converted != "NaN")
        numEl.innerHTML = Converted.toUpperCase();

}