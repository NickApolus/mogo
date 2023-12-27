
document.addEventListener('DOMContentLoaded', function(){ 
    
    var acc = document.getElementsByClassName("accordion");
var i;
var moveDown = document.getElementsByClassName("slider-show-message");
// Переменные текстового блока с прокруткой
var btnRight1 = document.querySelector('#btn-text-r');
var btnLeft1 = document.querySelector('#btn-text-l');
var textSlide1 = document.querySelector('#text-slide1');
var textSlide1Name = document.querySelector('#text-slide1_name');
// кнопки после адаптации
var btnLeft2 = document.querySelector('#btn-text-l2');
var btnRight2 = document.querySelector('#btn-text-r2');
// текстовые теги этого же блока после адаптации
var textSlide2 = document.querySelector('#text-slide2');
var textSlide2Name = document.querySelector('#text-slide2_name');
// text block with josh glowicki
// кнопки до адаптации
var btnLeft3 = document.querySelector('#btn-text-l3');
var btnRight3 = document.querySelector('#btn-text-r3');
// текстовые теги этого же блока до адаптации
var textSlide3 = document.querySelector('#text-slide3');
var textSlide3Name = document.querySelector('#text-slide3_name');
// кнопки после адаптации
let btnLeft4 = document.querySelector('#btn-text-l4');
let btnRight4 = document.querySelector('#btn-text-r4');
// текстовые теги этого же блока после адаптации
let textSlide4 = document.querySelector('#text-slide4');
let textSlide4Name = document.querySelector('#text-slide4_name');
const text1 = "Любовь к работе - это когда совершенно знаешь свое дело и делаешь со старанием.";
const text2 = "Программирование как игра. Узнал что-то новое, поиграя сделай и увидешь результат";
// burger-menu block
// #showburger 
// #burger-menu
// #burger #close-menu
let burger = document.querySelector('#burger');
let menuBurger = document.querySelector('#burger-menu');
let closeBurger = document.querySelector('#close-menu');
burger.addEventListener('click', function(e){
    console.log("burger is pressed");
    menuBurger.classList.toggle("showburger");
})
closeBurger.addEventListener('click', function(e){
    console.log("cross is pressed");
    menuBurger.classList.remove("showburger");
})




//burger's code is ended

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        var moveDown = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/*даун видна 
ап спрятана изначально*/
document.getElementById("drop").addEventListener('click', function() {
    document.getElementById("hide").classList.toggle("active-hiddeN");
    document.getElementById("show").classList.toggle("hidden-activEE");
})
document.getElementById("drop2").addEventListener('click', function() {
    document.getElementById("hide2").classList.toggle("active-hiddeN");
    document.getElementById("show2").classList.toggle("hidden-activEE");
})
document.getElementById("drop3").addEventListener('click', function() {
    document.getElementById("hide3").classList.toggle("active-hiddeN");
    document.getElementById("show3").classList.toggle("hidden-activEE");
})

// =====================================block 1 with text===========================================
// before adaptive
btnRight1.addEventListener('click', function(e){
    console.log("Весь 1"+1);
    textSlide1.innerHTML = 'Если много будешь стараться верстать сайтов , то опыт будет расти. Не бойся если не получается т. к. осмысление приходит потом.';
    textSlide1Name.innerHTML = 'Якусь Николай';
})
btnLeft1.addEventListener('click', function(e){
    console.log("Весь 1"+10);
    textSlide1.innerHTML = 'Программирование как игра. Узнал что-то новое, поиграя сделай и увидешь результат';
    textSlide1Name.innerHTML = 'Иван Проза';
})
// after adaptive
btnLeft2.addEventListener('click', function(e){
    console.log("Весь 2");
    textSlide2.innerHTML = 'Если много будешь стараться верстать сайтов , то опыт будет расти. Не бойся если не получается т. к. осмысление приходит потом.';
    textSlide2Name.innerHTML = 'Якусь Николай';
})
btnRight2.addEventListener('click', function(e){
    console.log("Весь 2");
    textSlide2.innerHTML = 'Программирование как игра. Узнал что-то новое, поиграя сделай и увидешь результат';
    textSlide2Name.innerHTML = 'Иван Проза';
})
// =====================================block 2 with text===========================================
btnRight3.addEventListener('click', function(e){
    console.log("Весь 1"+1);
    textSlide3.innerHTML = 'Фотогалерея моя есть. Подписывайся на мою инсту!';
    textSlide3Name.innerHTML = 'Джош Гловицкий';
})
btnLeft3.addEventListener('click', function(e){
    console.log("Весь 1"+10);
    textSlide3.innerHTML = 'Фотография позволет выделить любой объект в природе и преобразовать его в свой сайт.';
    textSlide3Name.innerHTML = 'Джош Гловицкий';
})
// after adaptive
btnLeft4.addEventListener('click', function(e){
    console.log("Весь 2");
    textSlide4.innerHTML = text1;
    textSlide4Name.innerHTML = 'Джош Гловицкий';
})
btnRight4.addEventListener('click', function(e){
    console.log("Весь 2");
    textSlide4.innerHTML = text2;
    textSlide4Name.innerHTML = 'Джош Гловицкий';
})
// ===================================================enumerator===============================

masOfIdName = [out, out2, out3, out4, out5];

let digit = document.getElementsByClassName('hot').innerHTML;
console.log(digit);
const time = 1000;
const step = 1;
const time1 = 1000;
const step1 = 1;
const time2 = 1000;
const step2 = 1;
const time3 = 1000;
const step3 = 1;
const time4 = 1000;
const step4 = 1;

function outNum(num, elem) {
    let e = document.querySelector('#out');
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if(n === num) {
              clearInterval(interval);
              console.log(n);
         }
    e.innerHTML = n;
    },
t);
};


    outNum(42, '#out');

    function outNum1(num1, elem1) {
        let el = document.querySelector('#out2');
        n2 = 0;
        let t = Math.round(time1/(num1/step1));
        let intervale = setInterval(() => {
            n2 = n2 + step1;
            if(n2 === num1) {
                  clearInterval(intervale);
                  console.log(n2);
             }
        el.innerHTML = n2;
        },
    t);
    };
    outNum1(123, '#out2');

    function outNum2(num2, elem2) {
        let ela = document.querySelector('#out3');
        n3 = 0;
        let t = Math.round(time2/(num2/step2));
        let intervali = setInterval(() => {
            n3 = n3 + step2;
            if(n3 === num2) {
                  clearInterval(intervali);
                  console.log(n3);
             }
        ela.innerHTML = n3;
        },
    t);
    };

    outNum2(15, '#out3');

    function outNum3(num3, elem3) {
        let elam = document.querySelector('#out4');
        n4 = 0;
        let t = Math.round(time3/(num3/step3));
        let intervalie = setInterval(() => {
            n4 = n4 + step3;
            if(n4 === num3) {
                  clearInterval(intervalie);
                  console.log(n4);
             }
        elam.innerHTML = n4;
        },
    t);
    };

    outNum3(99, '#out4');

    function outNum4(num4, elem4) {
        let elame = document.querySelector('#out5');
        n5 = 0;
        let t = Math.round(time4/(num4/step4));
        let intervala = setInterval(() => {
            n5 = n5 + step4;
            if(n5 === num4) {
                  clearInterval(intervala);
                  console.log(n5);
             }
        elame.innerHTML = n5;
        },
    t);
    };

    outNum4(24, '#out5');

});

