let array = [10,40,30,20,15,5];

console.log(array.sort(function(a, b){return a - b}));
console.log(Math.max.apply(null, array))
console.log(Math.min.apply(null, array))