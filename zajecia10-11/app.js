//methods for buttons 
function btn1() {
    let newChild = document.createElement("div");
    newChild.classList.add("div");
    document.body.appendChild(newChild);
}
function btn2() {
    let divs = document.querySelectorAll(".div");
    if(divs.length < 0){
        throw new Error("Nie ma żadnych divów do usunięcia");
    }
    divs[0].remove();
}
function btn3() {
    let divs = document.querySelectorAll(".div");
    if(divs.length < 0 || divs.length < 3){
        throw new Error("Nie ma zadnych divow albo jest ich mniej niz 3");
    }
    divs[2].style.backgroundColor = "red";
}
function btn4() {
    let divs = document.querySelectorAll(".div");
    divs.forEach((div) => {
        div.textContent = "nowy tekst";
    })
}
function calculate() {
    let firstNumber = document.getElementById("first").value;
    let secondNumber = document.getElementById("second").value;
    let operation = document.getElementById("operation").value;
    let resultDiv = document.getElementById("result");
    if(firstNumber === "" || secondNumber === ""){
        throw new Error("Nie podano liczb");
    }
    switch(operation){
        case "dodawanie":
            resultDiv.textContent = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case "odejmowanie":
            resultDiv.textContent = parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case "mnozenie":
            resultDiv.textContent = parseInt(firstNumber) * parseInt(secondNumber);
            break;
        case "dzielenie":
            if(secondNumber === "0"){
                alert("Nie można dzielić przez 0");
                throw new Error("Nie można dzielić przez 0");
            }
            resultDiv.textContent = parseInt(firstNumber) / parseInt(secondNumber);
            break;
        default:
            throw new Error("Nieznana operacja");
    }
}
