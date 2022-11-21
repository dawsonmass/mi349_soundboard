let coin = document.getElementById('coin-flip')
let play1 = document.getElementById('play1')

play1.onclick = 
function() {
    console.log('play1');
    coin.play();
    return false;
};

let click = document.getElementById('click-x')
let play2 = document.getElementById('play2')

play2.onclick = 
function() {
    console.log('play2');
    click.play();
    return false;
};

let clang = document.getElementById('clang-x')
let play3 = document.getElementById('play3')

play3.onclick = 
function() {
    console.log('play3');
    clang.play();
    return false;
};