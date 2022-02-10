const inputDOM = document.getElementById("task");
const listDOM = document.getElementById("list");
const liveToast = document.getElementById("liveToast");
const errorToast = document.getElementById("errorToast");

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
        failed();
    }
}


function addChild(liDOM, listDOM) {
    // elemanı listeye ekle
    listDOM.appendChild(liDOM);

    // işlem başarılı mesajını ver
    accomplished();
}

// element ekleme işlemi başarılı olursa mesaj ver
function accomplished() {
    var toast = new bootstrap.Toast(liveToast);
    toast.show();
}

//element ekleme işlemi başarılı olursa mesaj ver
function failed() {
    var toast = new bootstrap.Toast(errorToast);
    toast.show();
}
