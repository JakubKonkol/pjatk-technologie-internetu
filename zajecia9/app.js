import { Auto } from './Auto.js';

const cars = [];
function addAuto(auto){
    if(!auto instanceof Auto){throw new Error('Invalid argument type');}
    if(auto.cena_koncowa > 10000){
        cars.push(auto);
    }
    
}
function updateYear(){
    cars.forEach(car => {
        car.updateCarInfo(car.przebieg, car.rok + 1);
    });
}