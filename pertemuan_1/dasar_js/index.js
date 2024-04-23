// Integer
let bilanganBulat = 42;
let bilanganPecahan = 3.14;

// String
let teks1 = 'Hello World!'
let teks2 = "contoh string"

// Boolean
let benar = true
let salah = false

// tipe data khusus
let tidakAdaNilai = null
let variabelBeluDiisi;

const simbolUnik = Symbol('deskripsi simbol')
console.log(simbolUnik)  

let angka = [1, 2, 3, 4, 5]

// fungsi
function tambah(a, b) {
     return a + b;
}
// console.log(tambah(3, 4))

// Objek
let mahasiswa = {
     nama: 'Fajar',
     usia: 16,
     jurusan: 'PPLG'
}

// Operator
let hasil = 5 + 3;
// console.log(hasil)

let hasilPengurangan = 10 - 5
// console.log(hasilPengurangan)

let hasilPerkalian = 20 * 3
// console.log(hasilPerkalian)

let hasilPembagian = 50 / 4
// console.log(hasilPembagian)

let hasilSisaBagi = 9 % 4
// console.log(hasilSisaBagi)

// Operator Pembandingan
let hasilBanding = 5 == 5;
// console.log(hasilBanding)

let hasilBanding1 = 10 != 5;
// console.log(hasilBanding1)

let hasilBanding2 = 8 > 5;
// console.log(hasilBanding2)

let hasilBanding3 = 3 < 7;
// console.log(hasilBanding3)

let hasilBanding4 = 10 >= 5;

let hasilBanding5 = true && false;

let hasilBanding6 = 3 + 5 == 7 && 4 + 5 == 9 || true
console.log(hasilBanding6)

// Operator Penugasan
let angka1 = 5
angka1 += 3

// Operator Null Checking
let objek = null;
let nilai = objek?.properti

// Operator Kondisional
let umur = 18
let status = (umur >= 18) ? "Dewasa" : "Anak-Anak"
// console.log(status)

// If Statement
if ( umur >= 18 ) {
     status = "Dewasa"
} else if (umur >= 12 && umur < 18){
     status = "Remaja"
} else {
     status = "Anak-Anak"
}
console.log(status)

// Switch Statement
let warna = "kuning" 
let warnaApa 
switch (warna) {
     case "kuning":
          warnaApa = "warna kuning"
          break;
     case "merah":
          warnaApa = "warna merah"
          break;
     case "hijau":
          warnaApa = "warna hijau"
     default:
          warnaApa = "tidak terdefinisi"
          break;
}
console.log(warnaApa)

// JavaScript Function 
function sapa(nama) {
     console.log(`Hallo ${nama}`);
}   
sapa('Fajar');
 
function calculateGST(productPrice) {
     return productPrice * 0.05;
}
console.log(calculateGST(15))

let sum = (a, b) => {
     return a + b
}
// alert(sum(1, 2))

const greet = function(nama, kelas, jurusan) {
     console.log(`Hello, Im ${nama}, saya kelas ${kelas}, saya dijurusan ${jurusan}`)
}
const sayHello = greet
sayHello('Fajar', '11', 'PPLG')

function sapa1(nama = "Pengunjung") {
     console.log(`Hello ${nama}`);
}
sapa1() // argumen kosong
sapa1('Fajar') // argumen terisi

// let jumlah2 = 10
// let hargaSatuan = 5
// let total = jumlah2 + (hargaSatuan || 0)

// Operator Ternary
// let harga2 = hargaSatuan2 !== undefined ?
// hargaSatuan2 : 0
// console.log(harga2)

// Nulish coacle
// let harga3 = hargaSatuan3 ?? 0
// console.log(harga3)

// Transformasi Array
const numbers = [1, 2, 3, 4, 5]
const doubles = numbers.map((numbers) => numbers * 2)
// console.log(doubles)

const numbers1 = [1, 2, 3, 4, 5]
const evenNumbers = numbers1.filter((number) => number % 2 === 0 )
// console.log(evenNumbers)

const _numberReduce = [1, 2, 3, 4, 5]
const _sumReduce = _numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(_sumReduce)

const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit) => console.log(fruit));

const fruits1 = ['banana', 'apple', 'cherry'];
fruits1.sort();

const numbers2 = [1,2,3,4,5];
const result = numbers.find((number) => number > 3);
console.log(result);

let nilai1 = ""
let nilai2 = null

