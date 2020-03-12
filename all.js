let star = document.querySelector('#star');
let card_1 = document.querySelector('.card-1');
let card_2 = document.querySelector('.card-2');
let card_3 = document.querySelector('.card-3');
star.addEventListener('click', run)



//執行  
function run() {

    //初始位置
    let times = 0;

    //定時器  20ms/次
    let card1 = setInterval(function() {
        times += 10;

        //20ms + Y軸10px
        card_1.style.transform = 'translateY(-' + times + 'px)';

        //歸0
        if (times === 1000) {
            card_1.style.transform = 'translateY(0px)';
            times = 0;
        }
        console.log(times)
    }, 30);

    let card2 = setTimeout(function() {
        setInterval(function() {
            times += 10;

            //20ms + Y軸10px
            card_2.style.transform = 'translateY(-' + times + 'px)';

            //歸0
            if (times === 1000) {
                card_2.style.transform = 'translateY(0px)';
                times = 0;
            }
        }, 20);
    }, 300)

    let card3 = setTimeout(function() {
        setInterval(function() {
            times += 10;

            //20ms + Y軸10px
            card_3.style.transform = 'translateY(-' + times + 'px)';

            //歸0
            if (times === 1000) {
                card_3.style.transform = 'translateY(0px)';
                times = 0;
            }
        }, 10);
    }, 600)



    setTimeout(function() {
        clearInterval(card1);
    }, 8100)

}




//創造數字卡
for (let i = 0; i < 11; i++) {
    //後面補0  不然run時數字會斷掉
    if (i === 10) {
        $('.card-1').append($('<li></li>').text(0).addClass('num'));
        $('.card-2').append($('<li></li>').text(0).addClass('num'));
        $('.card-3').append($('<li></li>').text(0).addClass('num'));
        break
    }
    $('.card-1').append($('<li></li>').text(i).addClass('num'));
    $('.card-2').append($('<li></li>').text(i).addClass('num'));
    $('.card-3').append($('<li></li>').text(i).addClass('num'));
}