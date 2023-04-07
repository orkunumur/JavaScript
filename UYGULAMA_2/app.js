//Beden kitle Endeksi hesaplama

let kilo = Number(prompt("Kilonuzu giriniz"));

let boy = Number(prompt("Boyunuzu metre cinsinden giriniz"));

let bke = kilo / (boy * 2);

if (bke < 18.5) {
  console.log("İdeal kilonun altında " + bke);
} else if (bke >= 18.5 && bke <= 24.9) {
  console.log("İdeal kilonun altında " + bke);
} else if (bke >= 25 && bke <= 29.9) {
  console.log("deal kiloda" + bke);
} else if (bke >= 30 && bke <= 39.9) {
  console.log("İdeal kilonun çok üstünde (obez) " + bke);
} else if (bke >= 40) {
  console.log("İdeal kilonun çok üstünde (morbid obez) " + bke);
}
