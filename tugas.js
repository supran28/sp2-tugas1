//var password = prompt("Nama Mahasiswa dan Nilai");
//
//        if(Nilai > 70 == "asa"){
//            document.write("<h2>Selamat datang bos!</h2>");
//        } else {
//            document.write("<p>Password salah, coba lagi!</p>");
//        }
//
//        document.write("<p>Terima kasih sudah menggunakan aplikasi ini!</p>");



//var nilai = prompt("Inputkan nilai akhir:");
//        var grade = "";
//
//        if(nilai >= 90) grade = "A"
//        else if(nilai >= 80) grade = "B+"
//        else if(nilai >= 70) grade = "B"
//        else if(nilai >= 60) grade = "C+"
//        else if(nilai >= 50) grade = "C"
//        else if(nilai >= 40) grade = "D"
//        else if(nilai >= 30) grade = "E"
//        else grade = "F";
//
//        document.write(`<p>Grade anda: ${grade}</p>`);


//for (var y = 60; y<=100; y++){
//       if(y%2 ==0){
//           document.write(y + ":" +"genap")
//       }
//        else{
//            document.write(y + ":" + "ganjil")
//       }
//        document.write("</br>")
//    }


//var password = prompt("Password:");
//
//if(password == "supran"){
//    document.write("<h2>Selamat datang bos!</h2>");
//} else {
//    document.write("<p>Password salah, coba lagi!</p>");
//}
//
//document.write("<p>Terima kasih sudah menggunakan aplikasi ini!</p>");


// function default
//alert("ini dari function default yaitu alert")

// buat switch
//var nilai=11
//switch(nilai){
//    case nilai < 10:
//        document.write("nilai kurang 10")
//    break 
//    case nilai > 10:
//    document.write("nilai di atas 10")
//    break
//    default:
//        document.write("tidak memenuhi keduanya")
//}


//function namaFungsi(parameter) {
//    document.write(parameter);
//}
//
//// memanggil fungsi
//namaFungsi('ini argument');

// sp2 tugas1 jawaban nomor 4
//function deretAngka(awal,akhir){
//    for(var y = awal; y < akhir; y++){
//        for (var x = awal; x < akhir; x++){
//            if(x == 9 - (y - 1)){
//                var hasil =x * 2 - 2
//                var hasil2 = hasil * 3
//                document.write(hasil)
//            }else{
//                document.write("_")
//            }
//        }
//        document.write("<br/>")
//    }
// 
// }
// deretAngka(0,10)

// sp2 tugas1 jawaban nomor 3
//for(var y = 1; y < 10; y++){
//    for(var x = 1; x < 10; x++){
//        if(y == x || x==9 - (y - 1) || y == 8 || y == 2 || x == 2 || x == 8){
//            document.write("*")
//        }else{
//            document.write("_")
//        }
//    }
//    document.write("<br/>")
//}   



// sp2 tugas1 jawaban nomor 1
//function hitungLuasPersegiPanjang(panjang , lebar){
//    luas = panjang * lebar
//
//    document.write("panjang: " + panjang + "<br/>")
//    document.write("lebar: " + lebar + "<br><br/>")
//    document.write("masukan Luas Persegi Panjang : " + luas )
//}
//   panjang = prompt ("panjang")
//   lebar = prompt ( "lebar")
//
//   hitungLuasPersegiPanjang(panjang , lebar)


// sp2 tugas1 jawaban nomor 2
function hitungVolumeDanLuasPermukaanBalok(panjang , lebar , tinggi){
    volume = panjang * lebar * tinggi
    luas = 2 *(panjang * lebar) + (panjang * tinggi) + (lebar * tinggi)

    document.write("panjang: " + panjang + "<br>");
    document.write('tinggi :' + tinggi + '<br>');
    document.write("lebar: " + lebar + "<br>");
    document.write("Volume: " + volume + "<br>");
    document.write("Luas Permukaan Balok: " + luas);


}

panjang = prompt("panjang");
lebar = prompt("lebar");
tinggi =prompt ("tinggi");

hitungVolumeDanLuasPermukaanBalok(panjang , lebar , tinggi)


