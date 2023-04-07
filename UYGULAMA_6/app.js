// Mükemmel Sayı Uygulaması
let sayi = Number(prompt("Lütfen Bir Sayı Giriniz: "));

MükemmelSayi(sayi)

function MükemmelSayi (num){
    let toplam = 0;
    for (let i= 0; i <= num; i++){
        if (num % i == 0){
            toplam += i;
        }
    }
    if (toplam / num == 2){
        alert(num +" "+ "Mükemmel Sayıdır.");
    }else{
        alert(num +" "+ "Mükemmel Sayı Değildir.");
    }
}
