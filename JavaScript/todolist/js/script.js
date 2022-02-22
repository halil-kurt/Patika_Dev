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
        // elemana id ekle
        let id = inputDOM.value;
        liDOM.id = id;
        // elemanı listeye ekle.
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

    // set to local storage.
    setToSorage(liDOM);

    // işlem başarılı mesajını ver
    successful();
}

// element ekleme işlemi başarılı olursa mesaj ver
function successful() {
    var toast = new bootstrap.Toast(liveToast);
    toast.show();
}

//element ekleme işlemi başarısız olursa mesaj ver
function failed() {
    var toast = new bootstrap.Toast(errorToast);
    toast.show();
}

///------ local storage işlemleri------

// elemanı local storage a ekle.
let setToSorage = (liDOM) => {
    localStorage.setItem(liDOM.id, liDOM.innerHTML);
}


//-------- Listeden element silme ve seçme ----


document.addEventListener("click", function (event) {
    let classList = event.target.classList;
    let liItem = event.target.parentElement;
    // close işaretine tıklanırsa elemanı sil.
    if (classList.contains("remove")) {
        list.removeChild(liItem);

        // elemanı local storage dan sil.
        localStorage.removeItem(liItem.id);
    }

    // liste elemanlarına tıklanırsa
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