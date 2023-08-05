//  Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
//  Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
//  yaitu nama dan peran. Variabel peran harus memiliki isi data,
//  bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
//  bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
//  Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
//  Tugas Anda adalah untuk membuat program yang mengecek isi variabel
//  peran serta mengeluarkan respon sesuai isi variabel tersebut.
//  ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//  halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//  halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//  halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//  tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//  tips belajar penggunaan `` (backtick) pada javascript agar
//  mudah dalam memasukan variabel ke dalam string
//  tapi tanpa backtick juga ga masalah sih yg penting output sesuai

//  isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
//  algoritma
//  1. buat variabel nama dan peran
//  2. cek apakah nama kosong
//  3. jika nama kosong maka tampilkan "nama wajib diisi"
//  4. jika nama tidak kosong maka cek apakah peran kosong
//  5. jika peran kosong maka tampilkan "Pilih Peranmu untuk memulai game"
//  6. jika peran tidak kosong maka cek apakah peran nya Ksatria
//  7. jika peran nya Ksatria maka tampilkan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
//  8. jika peran nya Tabib maka tampilkan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
//  9. jika peran nya Penyihir maka tampilkan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
//  10. jika peran nya bukan Ksatria, Tabib, dan Penyihir maka tampilkan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

// CODE
let nama = "Baren",
  peran = "ah";
// peran = "Ksatria";
// peran = "Tabib";
// peran = "Penyihir";

if (nama == "") {
  console.log("nama wajib diisi");
} else {
  if (peran == "") {
    console.log("Pilih Peranmu untuk memulai game");
  } else {
    if (peran == "Ksatria") {
      console.log(
        `halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`
      );
    } else if (peran == "Tabib") {
      console.log(
        `halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`
      );
    } else if (peran == "Penyihir") {
      console.log(
        `halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
      );
    } else {
      console.log(
        "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
      );
    }
  }
}
