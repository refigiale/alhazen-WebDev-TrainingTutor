// alert("Selamat Datang");

// prompt("Apa kabarmu?");

//variable dengan var
var buah = "Pisang";
buah = "Strawberry";

var buah = "Anggur";

//variable dengan let
let buku = "IPA";
buku = "IPS";
// let buku = "IPS"; tidak dapat dideskripsikan ulang

//variable const
// const phi = "3/4";

// phi = "22/7"; tidak dapat diubah nilainya/nilainya tetap dan tidak dapat dideskripsikan ulang


//increment
let number = 10;
number++; //artinya tambah 1

//decrement
let number2 = 5;
number2--; //artinya kurang 1

console.log(buah);
console.log(buku);
// console.log(phi);
console.log(10%3);//modulus = nilai sisa dari hasil pembagian
console.log(number);
console.log(number2);

//luas lingkaran = phi.r.r
let jari_jari = prompt("Masukkan nilai r/jari-jari: ");
const phi = 3.14;
let luas_lingkaran = phi * jari_jari * jari_jari;
// alert("Luas lingkarang adalah: " + luas_lingkaran);
console.log("Luas lingkarang adalah: " + luas_lingkaran)

// var hp1 = "oppo";
// var hp2 = "samsung";
// console.log(hp1);
// console.log(hp2);

//ARRAY
// tempat menyimpan data, tapi data nya banyak

hp = ["oppo", "samsung", "redmi", "vivo"]; //4hp/4data
console.log(hp);
console.log(hp[3]);