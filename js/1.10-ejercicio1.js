let cost = 0;
let total = 0;

let validEntry = false;

let curso = "";
let beca = "";
let duracion = "";

do {
    validEntry = false;

    curso = prompt("Elija la opcion del curso que esta tomando:\na) Course\nb) Carrera\nc) Master");

    switch(curso){
        case "a":
            cost+=4999;
        break
        case "b":
            cost+=3999;
        break
        case "c":
            cost+=2999;
        break
        default:
            validEntry = true
        break
    }
} while (validEntry);

do {
    validEntry = false;

    beca = prompt("Elija la opcion de la beca que tiene:\na) Facebook\nb) Google\nc) Jesua");

    switch(beca){
        case "a":
            cost*=0.8;
        break
        case "b":
            cost*=0.85;
        break
        case "c":
            cost*=0.5;
        break
        default:
            validEntry = true
        break
    }
} while (validEntry);

do {
    validEntry = false;

    duracion = prompt("Ejila la duracion de su curso:\na) 2 meses\nb)6 meses\nc)12 meses");

    switch(duracion){
        case "a":
            total = cost*2;
        break
        case "b":
            total = cost*6;
        break
        case "c":
            total = cost*12;
        break
        default:
            validEntry = true
        break
    }
} while (validEntry);

console.log("El costo mensual es: " + cost)
console.log("El costo total es: " + total)