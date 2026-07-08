const angka = [5, 5, 5, 5, 5];

for (let a = 0; a < angka.length -1; a++) {
  console.log("length " + angka[a]);
}

angka.map((data, index) => {
  console.log("map " + index + " " + data);
});


let hasil = angka.reduce((total, value) => {
  return total + value;
} );
console.log("reduce " + hasil);


const pesanan = [bakso = 10000, soto = 15000, bakmi = 20000];

let totalHarga = pesanan.reduce((total, value) => {
  return total + value;
});
console.log("total harga " + totalHarga);