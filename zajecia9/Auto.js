export class Auto{
    rok;
    przebieg;
    cena_wyjsciowa;
    cena_koncowa;

    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa){
        this.rok = rok;
        this.przegieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }

    incrementPriceBy1000(){
        this.cena_wyjsciowa += 1000;
    }
    reduceFinalPrice(){
        let wiekAuta = new Date().getFullYear() - this.rok;
        this.cena_koncowa -= wiekAuta * 1000;
    }
    reduceFinalPriceByMileage() {
        const tmp = Math.floor(this.przebieg / 100000);
        this.cena_koncowa -= tmp * 10000;
      }
    updateCarInfo(przebieg, rok){
        this.przebieg = przebieg;
        this.rok = rok;

        this.reduceFinalPrice();
        this.reduceFinalPriceByMileage();
    }


}