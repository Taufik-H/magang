const angka = [5, 5, 5, 5, 5];

for (let a = 0; a < angka.length; a++) {
  console.log("length " + angka[a]);
}

angka.map((data, index) => {
  console.log("map " + index + " " + data);
});


let hasil = angka.reduce((total, value) => {
  return total + value;
}, 0);
console.log("reduce " + hasil);


const pesanan = [
  { nama: "bakso", harga: 10000 },
  { nama: "soto", harga: 15000 },
  { nama: "bakmi", harga: 20000 }
];

let totalHarga = pesanan.reduce((total, item) => {
  return total + item.harga;
}, 0);
console.log("Total Harga: " + totalHarga);