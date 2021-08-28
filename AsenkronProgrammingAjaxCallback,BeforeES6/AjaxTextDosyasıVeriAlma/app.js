//example.txt dosyasından ajax ile veri alacağız!
//readyStates : 0->request yok 1->bağlantı var 2->request var 3->request işleniyor 4->request bitti cevap(response) hazır

document.getElementById("btn").addEventListener("click",function(){

    //xml objesi oluşturalım
    const xhr = new XMLHttpRequest();

    //YOL 1 : Fazla kontrol-koşul durumu yazıldığından çok kullanılmaz
    // xhr.onreadystatechange=function(){
    //     if(this.status===200 && this.readyState===4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onload=function(){//Response değeri 4 old zaman çalışır
        if(this.status===200){
            document.getElementById("ajax").textContent=this.responseText;
            console.log(this.responseText);
        }
    }





    xhr.open("GET","example.txt",true);//->request:GET , nereden veri , asenkron mu

    xhr.send();
});