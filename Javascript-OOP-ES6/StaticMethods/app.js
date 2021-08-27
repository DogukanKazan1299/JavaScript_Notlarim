//Static Methodlar;
class Matematik{
    square(x){
        console.log(x*x);
    }

    static cube(x){
        console.log(x*x*x);
    }
}

Matematik.cube(5);//static olan metoda ulaşmak için class yapısı kullanılır.Objeyle erişim yoktur

const math = new Matematik();
math.square(10);//static olmayan metoda objeyle erişim sağlarız