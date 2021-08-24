let sonuc;

const name = "Doğukan";
const surname = "Kazan";
const age = 22;

sonuc = name + surname;
sonuc = name +" "+surname;

sonuc = name.length;
sonuc = name.concat(" ",surname," " , age," yaşındayım");

sonuc = name.toLowerCase();
sonuc = surname.toUpperCase();

sonuc = name.indexOf("ğ");

const langs = "Java,C#,Python,Matlab";
sonuc = langs.split(",");
sonuc = langs.replace("Java","Javascript");


console.log(sonuc);