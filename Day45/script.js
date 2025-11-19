setTimeout(function(){
    console.log("helll")
},5000)
setTimeout(function(){
    console.log("helll")
},4000)
setTimeout(function(){
    console.log("helll")
},3000)

var user ='YAsh'
var btn=document.querySelector('button')
var h1=document.querySelector('h1')
btn.addEventListener('click',function(){
     console.log('hello')
    setTimeout(function(){
        //console.log('hello')
        h1.innerHTML='Hello i am ha'
    },2000)
})


setInterval(function(){
        //console.log('hello')
        h1.innerHTML='Hello i am ha'
    },2000)