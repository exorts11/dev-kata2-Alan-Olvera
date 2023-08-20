let array = [4,"dos",8,"tres",5,9,1,"cero"];
let k = 0;

for(i in array){
    k = array[i]
    if (typeof k == "number"){
        console.log(k)
    }
}