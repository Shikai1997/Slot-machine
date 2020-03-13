let card_1 = document.querySelector(".card-1");
let card_2 = document.querySelector(".card-2");
let card_3 = document.querySelector(".card-3");
let star = document.querySelector("#star");

//結果
let result1 = document.querySelector('.result1');
let result2 = document.querySelector('.result2');
let result3 = document.querySelector('.result3');

//按鈕動畫
let bottom = document.querySelector('.bottom');
let center = document.querySelector('.center');

//監聽
star.addEventListener("click", run);

//创造数字卡
for (let i = 0; i < 11; i++) {
    //後面補0   避免動畫延遲
    if (i === 10) {
        $(".card-1").append($("<li></li>").text(0).addClass("num"));
        $(".card-2").append($("<li></li>").text(0).addClass("num"));
        $(".card-3").append($("<li></li>").text(0).addClass("num"));
        break;
    }
    $(".card-1").append($("<li></li>").text(i).addClass("num"));
    $(".card-2").append($("<li></li>").text(i).addClass("num"));
    $(".card-3").append($("<li></li>").text(i).addClass("num"));
}

//執行滾動
function run() {
    card1();
    setTimeout(() => card2(), 300);
    setTimeout(() => card3(), 600);

    animate();

}

//按鈕動畫
function animate() {
    star.style.transform = 'translateY(20px)';
    center.style.height = '20px';

    //阻止點擊  下方2行
    star.textContent = "wait";
    star.classList.add('stop');

    setTimeout(function() {
        star.style.transform = 'translateY(0px)';
        center.style.height = '40px';
    }, 300);


}

//card-1定时器
function card1() {
    result1.style.display = 'none';
    timer(0, card_1, 10); //變數3為速度
    let num = Math.floor(Math.random() * 10);
    result1.textContent = num;
    setTimeout(() => clear(), 6000);
}

//card-2定时器
function card2() {
    result2.style.display = 'none';
    timer(0, card_2, 8); //變數3為速度
    let num = Math.floor(Math.random() * 10);
    result2.textContent = num;
    setTimeout(() => clear(), 6000);
}

//card-3定时器
function card3() {
    result3.style.display = 'none';
    timer(0, card_3, 5); //變數3為速度
    let num = Math.floor(Math.random() * 10);
    result3.textContent = num;
    setTimeout(() => clear(), 6000);
}

//定时器
function timer(position, b, num) {

    settime = setTimeout(function() {
        position += 10;

        //每num毫秒  Y轴增加10px
        b.style.transform = "translateY(-" + position + "px)";

        //歸0
        if (position === 1000) {
            b.style.transform = "translateY(0px)";
            position = 0;
        }
        timer(position, b, num);
    }, num);

};

//顯示結果 並清除定時器
function clear() {
    result1.style.display = 'flex';
    result2.style.display = 'flex';
    result3.style.display = 'flex';

    //開放點擊
    star.textContent = "star";
    star.classList.remove('stop');

    clearTimeout(settime)
}