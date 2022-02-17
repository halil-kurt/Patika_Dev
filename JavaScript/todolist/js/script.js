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
        liDOM.classList.add("list-group-item")
        liDOM.innerHTML = `<span class="check">&#9989; </span>
        ${inputDOM.value}
        <span class="close remove">&times;</span>`;

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

//element ekleme işlemi başarısız olursa mesaj ver
function failed() {
    var toast = new bootstrap.Toast(errorToast);
    toast.show();
}


//-------- Listeden element silme ve seçme ----


document.addEventListener("click", function (event) {
    let classList = event.target.classList;

    // close işaretine tıklanırsa elemenı sil.
    if (classList.contains("remove")) {
        list.removeChild(event.target.parentElement)
    }

    // liste elamanlarına tıklanırsa
    if (classList.contains("list-group-item")) {
        isActive(classList, event);
    }
})


function isActive(classList, event) {
    // active klası varsa sil yoksa ekle
    if (classList.contains("active")) {
        classList.remove("active");
    }
    else {
        classList.add("active");
    }
    
    addCheckBox(event);
}

// aktif elemente check box ekle
function addCheckBox(event) {
    let checkSpan = event.target.childNodes[0];
    if (checkSpan.classList.contains("check")) {
        checkSpan.classList.remove("check");
        
    } else {
        checkSpan.classList.add("check");
    }
}