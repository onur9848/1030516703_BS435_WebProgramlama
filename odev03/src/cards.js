export function kartGizle() {
    document.getElementById("kazandiId").style.display="none";
    document.getElementById("kaybettiId").style.display="none";

    document.getElementById("kart0").src = "kart.png";
    document.getElementById("kart1").src = "kart.png"; //Kartlarin ön yüzünü gizlemek için
    document.getElementById("kart2").src = "kart.png";



}

var index = Math.floor(Math.random() * 3)
var arr1 = ["kart0", "kart1", "kart2"];  //
var sayac = 0; // kullanıcı tanımlanan hakların kontrolü için
var kontrol = -1;
console.log(index)
export function kartKaristir(kartno) {


    checkCard(kartno); // seçilen kart id'sini alıp başka fonksiyonda cevapın kontrolu yapılıyor
    kontrol = kartno

}

function checkCard(kartId) {

    if (kontrol!==kartId)
        sayac++;
    if (sayac <= 2) {
        if (index === kartId) { // secilen kart doğru ise oyunu bitirir
            document.getElementById(arr1[kartId]).src = "kedi.png";
            sayac++
            kazandi();
        } else { // secilen kart yanlış ise oyuna devam ettirir 2. kez seçilirse oyunu bitirmek için.
            document.getElementById(arr1[kartId]).src = "kopek.png";
            if (sayac === 2)
                kaybetti();
        }
    }
}

function kaybetti() {
    document.getElementById("alanId").style.display = "none";
    document.getElementById("kaybettiId").style.display = "inline";
}

function kazandi() {
    document.getElementById("alanId").style.display = "none";
    document.getElementById("kazandiId").style.display = "inline";
}

export function sifirlama() {
    if (sayac === 3) {
        kartGizle();
        sayac = 0;

    }
}
