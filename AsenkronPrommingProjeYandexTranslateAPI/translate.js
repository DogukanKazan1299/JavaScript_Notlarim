function Translate(word,language){
    this.apikey = "trnsl.1.1.20210829T131844Z.a57b3a3b2cb82eac.c13df4b238f9f1af3e10837b3e4f72974486aec3";
    this.word = word;
    this.language = language;

    // XHR object

    this.xhr = new XMLHttpRequest();

}
Translate.prototype.translateWord = function(callback){
    // Ajax işlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () =>{
        if(this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null,text);

        }else {
            callback("Bir hata oluştu",null);
        }
        
    }

    this.xhr.send();


};
Translate.prototype.changeParameters = function(newWord,newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
    
}