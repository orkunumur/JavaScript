// Benzin İstasyonu

//* Dizel = 21.50 L/TL
//* Benzin = 22.85 L/TL
//* LPG = 13.25 L/TL

//! Müşteriden İstenen Bilgiler
/* 
1. Yakıt Tipi
2. Yüklenecek Yakıt Miktarı
3. Ödeme Yöntemi BENZ
*/

let yakit = prompt("Yakıt Tipinizi Giriniz: ")
let miktar = Number(prompt("Yükelenecek Yakıt Miktarını Giriniz: "))
let odeme = prompt("Ödeme Yönteminizi Giriniz: ")

if ((yakit.toLowerCase() == "dizel") || (yakit.toLowerCase() == "benzin") || (yakit.toLowerCase() == "lpg")){
    if (yakit.toLowerCase() == "dizel"){
        let total = 21.50 * miktar
        console.log("Yakıt Tipi: "+ yakit + "\n" + "Tutar: " + total + " TL" + "\n" + "Ödeme Yöntemi: " + odeme)
    }
    else if (yakit.toLowerCase() == "benzin"){
        let total = 22.85 * miktar
        console.log("Yakıt Tipi: "+ yakit + "\n" + "Tutar: " + total + " TL" + "\n" + "Ödeme Yöntemi: " + odeme)
    }
    else{
        let total = 13.25 * miktar
        console.log("Yakıt Tipi: "+ yakit + "\n" + "Tutar: " + total + " TL" + "\n" + "Ödeme Yöntemi: " + odeme)
    }
}
else{
    alert("Lütfen Geçerli Bir Yakıt Tipi Giriniz")
}
