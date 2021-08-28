class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();//xhr objesi
    }

    get(url,callback){
        this.xhr.open("GET",url);//url objeyle alınacak
        this.xhr.onload=()=>{//Arrow Function this de hata çıkmadı
            if(this.xhr.status===200){
                callback(null,this.xhr.responseText);//200 de sorun yoksa err=null
            }
            else{
                callback("GET methodu hatalı",null);//hata varsa err=GET methodu hatalı gelsin
            }
        };

        this.xhr.send();
    }
    
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = ()=>{
            if(this.xhr.status===201){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Post Method Hatalı",null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload=()=>{
            if(this.xhr.status===200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Put Methodu Hatalı",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    delete(url,callback){
        this.xhr.open("DELETE",url);
        this.xhr.onload=()=>{
            if(this.xhr.status===200){
                callback(null,"Veri Silme İşlemi Başarılı");
            }
            else{
                callback("DELETE Methodu Hatalı",null);
            }
        };
        this.xhr.send();
    }
}



const request = new Request();


request.get("https://jsonplaceholder.typicode.com/posts",function(err,response){
    if(err===null){
        console.log(response);//hata yoksa response et
    }
    else{
        console.log(err);//hata varsa hata mesajını dön
    }
});


request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Action"},function(err,response){
    if(err===null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});

request.put("https://jsonplaceholder.typicode.com/albums/92",{userId:1111,title:"TitleIsChanged"},function(err,response){
    
    if(err===null){
        console.log(response);
    }
    else{
        console.log(err);
    }

});

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err===null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});