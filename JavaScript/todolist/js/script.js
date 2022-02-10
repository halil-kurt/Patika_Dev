const inputDOM = document.getElementById("task");
const listDOM = document.getElementById("list");


// ekle butonuna basıldığında çalışacak fonksyon
function newElement() {

    //kullanıcı inputu doğru girmişmi
    if (inputDOM.value != "") {
        // yeni bir li elementi oluştur
        let liDOM = document.createElement("li");
        liDOM.innerHTML = inputDOM.value;

        // ekele
        addChild(liDOM, listDOM);

        // inputu temizle
        inputDOM.value = "";
    } else {
        // hata mesajı ver
        // failed();
    }
}


function addChild(liDOM, listDOM) {
    // elemanı listeye ekle
    listDOM.appendChild(liDOM);

    // işlem başarılı mesajını ver
    // accomplished();
}