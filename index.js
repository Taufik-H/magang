//const array = [8, 0, 5, 7, 4, 5];

//for (let i = 5; i <= array.length - 1; i++) {
 //    console.log(array[i]);
//}

//const buah = ["jeruk", "semangka", "anggur", "apel", "pisang"];

//buah.map((elemen) => {
 //   console.log("map " + elemen);
//});

//buah.map((elemen,  index) => {
//    console.log("map " + index + "" + elemen);
//});
let arrAngka = [1, 2, 3, 4, 5]

let hasilPenjumlahan = arrAngka.reduce((total, value) => {
    return total + value;
});

let hasilPembagian = arrAngka.reduce((total, value) => {
    return total / value;
});

let hasilPengurangan = arrAngka.reduce((total, value) => {
    return total - value;
});

let hasilPerkalian = arrAngka.reduce((total, value) => {
    return total * value;
});

console.log("Penjumlahan:", hasilPenjumlahan);
console.log("Pembagian:", hasilPembagian);
console.log("Pengurangan:", hasilPengurangan);
console.log("Perkalian:", hasilPerkalian);