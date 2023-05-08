let meyveler = ["Kivi", "Muz"];
console.log(meyveler.length);

var ilkMeyve = meyveler[0];
var sonMeyve = meyveler[meyveler.length - 1];

//! Örnek 1: Bir dizinin tüm elemanlarını 2 ile çarpan fonksiyon;
const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})

console.log(sayilar);
//[2, 3, 4, 5, 10]
console.log(yeniArray);
//[4, 6, 8, 10, 20]

//! Örnek 2: Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.
const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeni_maas = maaslar.map((maas)=>{
    if (maas > 3000){
        return (maas*1.15).toFixed(2);
    }
    else {
        return (maas*1.25).toFixed(2);
    }
});
console.log(maaslar);
console.log(yeni_maas);