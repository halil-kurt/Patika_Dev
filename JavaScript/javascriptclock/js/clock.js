
const myName = document.getElementById("myName");


let userNmae = prompt("Enter Your Name");// Kullanıcı'dan isim al

function userEnter() {
    // Kullanıcı adını girerse, ekrana yazdır.
    (userNmae) ? myName.innerHTML = `${userNmae}` : alert("Lütfen Adınızı giriniz");

    setInterval(showTime, 1000);
}
userEnter();

// Tarih bilgilerini ekrana yazdır.
function showTime() {
    const myClock = document.getElementById("myClock");
    const date = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[date.getDay()]
    let [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    // saat dakika yada saniye değerlerinin < 10 olması durumnda başına sıfır ekle
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Tarih bilgilerini ekrana yazdır.
    myClock.innerHTML = `${hour}:${minutes}:${seconds} ${day}`;

}

