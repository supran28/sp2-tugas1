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


function deretAngka(awal,akhir){
    for(var y = awal; y < akhir; y++){
        for (var x = awal; x < akhir; x++){
            if(x == 9 - (y - 1)){
                var hasil =x * 2 - 2
                var hasil2 = hasil * 3
                document.write(hasil)
            }else{
                document.write("_")
            }
        }
        document.write("<br/>")
    }
 
 }
 deretAngka(0,10)

