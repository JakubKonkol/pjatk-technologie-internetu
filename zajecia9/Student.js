export class Student{
    imie;
    nazwisko;
    oceny = [];
    srednia = 0;


    constructor(imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
    }

    hello(){
        return `Witaj ${this.imie} ${this.nazwisko} Twoja srednia to ${this.srednia}`;
    }
    calculateAverage(){
        let sum = 0;
        for(let i = 0; i < this.oceny.length; i++){
            sum += this.oceny[i].wartosc;
        }
        this.srednia = sum / this.oceny.length;
    }

    addGrade(ocena){
        if(!ocena instanceof Ocena){throw new Error('Invalid argument type');}
        this.oceny.push(ocena);
        this.calculateAverage();
    }
    get oceny(){
        let oceny = '';
        this.oceny.forEach(ocena => {
            oceny += `${ocena.przedmiot} ${ocena.wartosc}\n`;
        });
        return oceny;
    }



}