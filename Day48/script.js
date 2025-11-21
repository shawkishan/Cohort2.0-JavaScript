var body=document.querySelector('body')
var h1=document.querySelector('h1')

body.addEventListener('keypress',function(dets){
    console.log("wqfq")
    console.log(dets)
    h1.innerHTML=dets.code
})