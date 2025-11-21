var img =document.querySelector('img')
var love =document.querySelector('#love')

img.addEventListener('dblclick',function(){
    love.style.opacity = 1
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'

    setTimeout(function () {
        love.style.transform = 'translate(-50%,-300%) scale(1) rotate(60deg)'
    }, 800)
    setTimeout(function () {
        love.style.opacity = 0
    }, 1000)
    setTimeout(function () {
        love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'
    }, 1200)


})


// var img = document.querySelector('img');
// var love = document.querySelector('#love');
// var animating = false;

// img.addEventListener('dblclick', function() {
//     if (animating) return;
//     animating = true;

//     love.style.opacity = 1;
//     love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';

//     setTimeout(function() {
//         love.style.transform = 'translate(-50%, -300%) scale(1) rotate(60deg)';
//     }, 800);

//     setTimeout(function() {
//         love.style.opacity = 0;
//     }, 1000);

//     setTimeout(function() {
//         love.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)';
//         animating = false;
//     }, 1200);
// });