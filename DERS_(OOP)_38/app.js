// OOP Ders 1
class Insan{
    constructor(){
        console.log("yapıcı çalıştı")
    }
}

const insan_1 = new Insan();

class Insan2{
    constructor(isim, soyisim, yas, maas){
        console.log("yapıcı çalıştı")
        this.ad = isim;
        this.soyad = soyisim;
        this.yas = yas;
        this.salary = maas;
        // this.maas_goster() //! Otomatik Çalıştırma
        
    }
    maas_goster() {
        console.log(`Maaş: ${this.salary}`);
}
}

const insan_2 = new Insan2("orkun", "uzundere", 25, 10500);
const insan_3 = new Insan2("umur", "uzundere", 40, 100500);
insan_2.maas_goster() //! Dışardan çağırma
insan_3.maas_goster() //! Dışardan çağırma

                        //* OOP Ders 2: Static Method


//? Static bir değişken nesne ile çağrılamaz, ancak class'ın kendi ile çağrılabilir.
class Insan3{
    static languagecount = 10;

    constructor(isim, soyisim, yas, maas){
        console.log("yapıcı çalıştı")
        this.ad = isim;
        this.soyad = soyisim;
        this.yas = yas;
        this.salary = maas;
        // this.maas_goster() //! Otomatik Çalıştırma
        
    }
    maas_goster() {
        console.log(`Maaş: ${this.salary}`);
    }
    customer_info(){
        console.log(`
        Ad: ${this.ad},
        Soyad: ${this.soyad},
        Yaş: ${this.yas},
        Maaş: ${this.salary}
        Dil Adeti: ${this.languagecount}`)

    }
}
const insan_4 = new Insan3("Ali", "At", 80, 4000);
insan_4.customer_info(); //! Static değişken nesne ile çağrılamadı, burada dil adeti kısmı undefined kaldı.
console.log(Insan3.languagecount);