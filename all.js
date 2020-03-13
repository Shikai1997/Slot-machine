let card_1 = document.querySelector(".card-1");
let card_2 = document.querySelector(".card-2");
let card_3 = document.querySelector(".card-3");
let star = document.querySelector("#star");

star.addEventListener("click", run);

//创造数字卡
for (let i = 0; i < 11; i++) {
  //后面补0  不然动画会有延迟
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

//执行滚动
function run() {
  card1();
  setTimeout(() => card2(), 300);
  setTimeout(() => card3(), 600);

  let ran1 = Math.floor( 5 + Math.random()*5);
  let ran2 = Math.floor( 8 + Math.random()*8);
  let ran3 = Math.floor( 11 + Math.random()*11);

}

//card-1定时器建立
function card1() {
  timer(0,card_1,30);
}

//card-2定时器建立
function card2() {
  timer(0,card_2,20);
}

//card-3定时器建立
function card3() {
  timer(0,card_3,10);

  setTimeout(function(){
      clearTimeout(timer);
  },3500);
}

//定时器
function timer(position,b,num) {

    setTimeout(function() {
      position += 10;

      //每num毫秒  Y轴增加10px
      b.style.transform = "translateY(-" + position + "px)";

      //归0
      if (position === 1000) {
       b.style.transform = "translateY(0px)";
        position = 0;
      }
      timer(position,b,num);
    }, num);
  };


