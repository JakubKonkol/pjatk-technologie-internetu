/**
 * Zadanie 1
 */
function checkIfNumbersMakePythagoreanTriple(a, b, c) {
    let arr = [a, b, c];
    arr.sort((a,b) => a - b);
    return arr[0] * arr[0] + arr[1] * arr[1] === arr[2] * arr[2];
}
/**
 * Zadanie 2
 */
function logNumbersFromRange(a,b){
    for(let i = a; i <= b; i++){
        if(i!= 0 && i % 3 === 0){
            console.log(i);
        }
    }
}
/**
 * Zadanie 3
 */
function drawTabliczka(bok) {
    for (let i = 1; i <= bok; i++) {
      let row = '';
      for (let j = 1; j <= bok; j++) {
        row += (i * j) + ' ';
      }
      console.log(row);
    }
}
/**
 * Zadanie 4
 */
function printFibonacciOfLength(n){
    let a1 = 0;
    let a2 = 1;
    console.log(a1);
    console.log(a2);
    for(let i = 0; i < n - 2; i++){
        let temp = a1 + a2;
        console.log(temp);
        a1 = a2;
        a2 = temp;
    }
}
/**
 * Zadanie 5
 */
function drawChristmasTree(h) {
    for (let i = 1; i <= h; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "*";
      }
      console.log(row);
    }
  }
  /**
 * Zadanie 6
 */
function drawChristmasTreeAtNight(h) {
    
}
const EFigureType = {
    PROSTOKAT: "Prosokat",
    TRAPEZ: "Trapez",
    ROWNOLEGLOBOK: "Rownoleglobok",
    TROJKAT: "Trojkat"
}
/**
 * Zadanie 7
 */
function calculateArea(figure, a, b, h) {
    switch (figure) {
        case EFigureType.PROSTOKAT:
            return calculateProstokat(a, b);
        case EFigureType.TRAPEZ:
            return calculateTrapez;
        case EFigureType.ROWNOLEGLOBOK:
            return calculateRownoleglobok;
        case EFigureType.TROJKAT:
            return calculateTrojkat;
        default:
            throw new Error("Nieznany typ figury");
    }
}
//Helpers for calculateArea
function calculateProstokat(a, b) {
    console.log(a * b);
    return a * b;
}
function calculateTrapez(a, b, h){
    console.log((a + b) * h / 2);
    return (a + b) * h / 2;
}
function calculateRownoleglobok(a, h){
    console.log(a * h);
    return a * h;
}
function calculateTrojkat(a, h){
    console.log(a * h / 2);
    return a * h / 2;
}
/**
 * Zadanie 8
 */
function calculateAreaButBetter(figureType, a, b, c){
    const calculations = {
        [EFigureType.PROSTOKAT]: () => a * b,
        [EFigureType.TRAPEZ]: () => (a + b) * c / 2,
        [EFigureType.ROWNOLEGLOBOK]: () => a * c,
        [EFigureType.TROJKAT]: () => a * c / 2
    }
    if(!calculations[figureType]){
        throw new Error("Nieznany typ figury");
    }
    console.log(calculations[figureType]());
}
/**
 * Zadanie 9
 */
function printPascalTriangle(h){

}
/**
 * Zadanie 10
 */
function censorString(string, bannedWords){
    let arr = string.split(" ");
    arr.filter(word => bannedWords.includes(word)).forEach(word => arr[arr.indexOf(word)] = "*".repeat(word.length));
    return arr.join(" ");
}



