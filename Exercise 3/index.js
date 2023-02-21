const { BMI, KBMI } = require('./BMI');
const Celcius = require ('./Temperatur');
let farenheit = 99.20;
let Celcius1 = Celcius(farenheit);
console.log(`${farenheit}F = ${Celcius1} C.`);

let berat =70;
let tinggi =1.70;

let bmi= BMI(berat,tinggi);
let BMIK = KBMI (bmi);

console.log(`BMI: ${bmi.toFixed(2)}`);
console.log(`Kategori BMI: ${BMIK}`);
