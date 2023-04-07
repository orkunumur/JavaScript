//! DERS ORTALAMASI BULMA
//* VİZE 1 %30, VİZE 2 %30, FİNAL %40
let v1 = Number(prompt("Vize 1: "));
let v2 = Number(prompt("Vize 2: "));
let F = Number(prompt("Final: "));
let ort = (v1*0.3)+ (v2*0.3) + (F*0.4);

if (ort >= 60){
    alert("Dersten Geçtiniz tebrikler. Ortalamanız: "+ ort);
    console.log("Dersten Geçtiniz tebrikler");
} else {
    alert("Dersten Kaldınız !");
    console.log("Dersten Kaldınız !. Ortalamanız: "+ ort);
}
