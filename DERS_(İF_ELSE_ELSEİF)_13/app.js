// Else if yapısı 


let secilenYol = prompt("Lütfen gitmek istediğiniz yolu seçiniz :");

if(secilenYol ==1){
    alert("Seçilen yol "+ secilenYol +". yoldur.");
}
else if(secilenYol==2){
    alert("Seçilen yol "+ secilenYol +". yoldur.");
}
else if(secilenYol ==3){
    alert("Seçilen yol "+ secilenYol +". yoldur.");
}
else{
    alert("Lütfen geçerli bir yol seçiniz !!");
}

// Tenary operatörü
var money = 40;
//* Normal tenary
var buy_sit = money < 10 ? console.log("Can't buy this product"):  console.log("Can buy this product");

//* Zincirleme tenary
var canBuy = 
    (money < 17) ? console.log("Satın alamazsın.."):
    (money > 30) ? console.log("Satın alabilirsin.."):
    console.log("Para miktarını girmen gerekmektedir..");

