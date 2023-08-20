const days = ["lunes", "martes", "miercoles", "jueves", "sabado"];
const response = ["Nacido", "Bautizado", "Casado", "Enfermo", "Empeoro", "Murio"];
let entry = ""
let domingo = false;

while (!domingo){

    entry = prompt("Introduce un dia de la semana")
        
    console.log("Solomon Grundy,")
    for (k in days){
        if(entry == days[k]){
            console.log(response[k]+" en " + days[k] + ",")
        }
    }

    if (entry == "domingo"){
        console.log("Enterrado en domingo.\nEste es el fin de Solomon Grundy");
        domingo = true
    }

}