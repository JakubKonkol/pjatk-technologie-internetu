class Auto{
    rok;
    przebieg; 
    cena_wyjsciowa;
    cena_koncowa;
    constructor(rok, przebieg, cena_wyjsciowa){
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }
}
let cars = [
    new Auto(2010, 100000, 10000),
    new Auto(2015, 50000, 20000),
    new Auto(2018, 20000, 30000),
    new Auto(2019, 10000, 40000),
    new Auto(2020, 1000, 50000),
]
function createTableForCar(auto){
    document.write("<tr>");
    document.write("<td>" + auto.rok + "</td>");
    document.write("<td>" + auto.przebieg + "</td>");
    document.write("<td>" + auto.cena_wyjsciowa + "</td>");
    document.write("<td>" + auto.cena_koncowa + "</td>");
    document.write("</tr>");
}
function createTable(){
    document.write("<table>");
    document.write("<tr>");
    document.write("<th>Rok</th>");
    document.write("<th>Przebieg</th>");
    document.write("<th>Cena wyjściowa</th>");
    document.write("<th>Cena końcowa</th>");
    document.write("</tr>");
    cars.forEach(createTableForCar);
    document.write("</table>");
}