let star = document.querySelector('#star');
let card_1 = document.querySelector('.card-1')
let card_2 = document.querySelector('.card-2')
let card_3 = document.querySelector('.card-3')
star.addEventListener('click',run)



//执行滚动   
function run(){

    //初始位置
    let times = 0;   

    //定时器   每20毫秒执行  看起来比较顺
    setInterval(function(){
        times += 10;

        //每20毫秒  Y轴增加10px
        card_1.style.transform = 'translateY(-'+times+'px)';

        //归0
        if(times === 1000){
            card_1.style.transform = 'translateY(0px)';
            times = 0;
        }
    },20)
}



//创造数字卡
for(let i = 0; i<11;i++){
    //后面补0  不然动画会有延迟
    if(i === 10){
        $('.card-1').append($('<li></li>').text(0).addClass('num'));
        $('.card-2').append($('<li></li>').text(0).addClass('num'));
        $('.card-3').append($('<li></li>').text(0).addClass('num'));
        break
    }
    $('.card-1').append($('<li></li>').text(i).addClass('num'));
    $('.card-2').append($('<li></li>').text(i).addClass('num'));
    $('.card-3').append($('<li></li>').text(i).addClass('num'));
}


