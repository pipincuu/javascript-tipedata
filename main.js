const namaKu = "Sharfina";
const nilaiUjian = 80;
const apakahSukaBelajar = true;
const nilaiUjianBerikutnya = null;
const seberapaBesarAkuCintaBelajar = undefined;

console.log(`Namaku adalah ${namaKu}, dan aku mendapatkan nilai ujian ${nilaiUjian}, 
apakah aku suka belajar? jawabannya adalah ${apakahSukaBelajar}. Namun, besarnya rasa cintaku dalam belajar adalah ${seberapaBesarAkuCintaBelajar},
karena aku tidak bisa mendeskripsikannya. Untuk nilai ujian berikutnya, 
adalah ${nilaiUjianBerikutnya}, karena aku tidak ikut ujian`);

const aboutMe = {
    nama: "Sharfina",
    asal: "Malang",
    hobi: "Membaca Buku",
    koleksiBuku: [
        "Atomic Habits by James Clear",
        "Outliers by Malcolm Gladwell",
        "Sherlock Holmes by Conan Doyle"
    ],
}

console.log(aboutMe);
console.log(aboutMe.koleksiBuku[0]);
aboutMe.koleksiBuku.forEach(function(item) {
    console.log(`${item} adalah koleksi buku ${aboutMe.nama}`)
})

aboutMe.koleksiBuku.push("You Do You by Fellexandro Ruby")
console.log(`aku mempunyai 1 koleksi buku lagi, yaitu ${aboutMe.koleksiBuku[3]}`);


