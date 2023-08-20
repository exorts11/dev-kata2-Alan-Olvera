let totalCost = 0;
let litros = 0;
let validEntry = false;
let entry = "";

do{

    let distance = prompt("Ingrese la distacia que recorrio en KM (Ej. 100)")
    try{
        distance = parseFloat(distance)
        if (distance > 0){
            totalCost+=parseFloat(distance)
        } else{
            validEntry = true;
        }
    } catch {
        console.log("Tipo de dato no valido. Por favor intente de nuevo");
        validEntry = true;
    }

} while(validEntry)

do {
    validEntry = false;

    entry = prompt("Elija la opcion de su tipo de vehiculo:\na) Coche\nb) Moto\nc) Autobus");

    switch(entry){
        case "a":
            totalCost*=0.2;
        break
        case "b":
            totalCost*=0.1;
        break
        case "c":
            totalCost*=0.5;
        break
        default:
            validEntry = true
        break
    }
} while (validEntry);

do{

    let distance = prompt("Ingrese la cantidad de combustible que consumio en lirtros (Ej. 100)")
    try{
        distance = parseFloat(distance)
        if (distance > 0){
            litros = parseFloat(distance)
        } else{
            validEntry = true;
        }
    } catch {
        console.log("Tipo de dato no valido. Por favor intente de nuevo");
        validEntry = true;
    }

} while(validEntry)

if (litros > 100){
    console.log("El cargo total es de: " + (totalCost + 10))
} else{
    console.log("El cargo total es de: " + (totalCost + 5))
}