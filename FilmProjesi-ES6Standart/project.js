//Form içindeki inputlar 
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");



eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);

    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    cardbody.addEventListener("click",deleteFilm);

    clear.addEventListener("click",clearAllFilms);

}


function addFilm(e){//yeni film ekle
    const title = titleElement.value;//input içeriğini al
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){//içerik boşsa ekleme yapma
        // Hata 
        UI.displayMessages("Boş Alanları Doldurunuz","danger");

    }
    else {
        // Yeni Film
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); // Arayüze film ekleme
       
        Storage.addFilmToStorage(newFilm);

        UI.displayMessages("Yeni Film Başarıyla Eklendi","success");
        


    }


    UI.clearInputs(titleElement,urlElement,directorElement);//film eklendikten sonra inputu boşalt

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id==="delete-film"){
        UI.deleteFilmFromUI(e.target);

        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Silme işlemi başarılı...","success");
    }
}

function clearAllFilms(){
    if(confirm("Filmleri Kaldırmak İstediğinize Emin Misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}