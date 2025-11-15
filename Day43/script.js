var a=document.querySelector('h1')
console.log(a)

//h1.addEventListener(click)

var c= Math.random()*100

var b=Math.floor(c)

console.log(b)

var btn=document.querySelector('button')
var box=document.querySelector('#box')

btn.addEventListener('click',function(){
    var c1=Math.floor(Math.random()*256)
    var c2=Math.floor(Math.random()*256)
    var c3=Math.floor(Math.random()*256)
    box.style.backgroundColor=`rgb(${c1},${c1},${c3})`
    // console.log(c1)
})

var arr=['asd','fgh','dwf','2wrd','qwd','qwdff']

var as=Math.floor(Math.random()*arr.length)
console.log(arr[as])

var arr1=[
    {
        team:'css',
        player:12,
        caption:1
    },
     {
        team:'rcb',
        player:12,
        caption:1
    },
     {
        team:'rr',
        player:12,
        caption:1
    },
     {
        team:'mi',
        player:'blue',
        caption:1
    },
]

var btn=document.querySelector('button')
var h1=document.querySelector('h1')
var main=document.querySelector('main')

btn.addEventListener('click',function(){
//console.log(arr1)
 var winner= arr1[Math.floor(Math.random()*arr1.length)]
  h1.innerHTML=winner.team
  h1.style.backgroundColor=winner.player
  main.style.backgroundColor=winner.caption
})

