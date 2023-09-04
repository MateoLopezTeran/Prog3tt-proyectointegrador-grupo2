/* Recuperamos el Local Storage de las peliculas favoritas */
let recupeStoragePelis = localStorage.getItem('favoritosPelis');
console.log(recupeStoragePelis);

let favoritosPelis = JSON.parse(recupeStoragePelis);

console.log(favoritosPelis);

