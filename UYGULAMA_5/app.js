// Kelime Sayısı Bulma
let metin = "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.";

let harf = prompt("Harf Giriniz: ");
metin = metin.toLowerCase();
harf = harf.toLowerCase();

let sonuc = bul(harf, metin);
alert("Harf Sayısı: ", sonuc);

function bul(karakter, paragraf){
    let sayac= 0;
    for (let i=0; i <= paragraf.length; i++){
        if (paragraf.charAt(i) == karakter){
            sayac +=1;
        }
    }
    return sayac;
}
