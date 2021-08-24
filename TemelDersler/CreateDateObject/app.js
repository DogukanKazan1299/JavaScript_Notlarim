let value;

const now = new Date(); // ŞİMDİ
value = now;

const date1 = new Date("11/09/1998 11:00:00");//date oluşturma 1 
value = date1;

const date2 = new Date("November 9 1998");//2
value = date2;

value = date1.getDate();//Gün
value = date1.getFullYear();
value = date1.getMonth();//0 dan başlar -> Ocak  0 


console.log(value);