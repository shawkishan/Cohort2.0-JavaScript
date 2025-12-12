function debounce(fn,delay){
    let time
    return function(){
        clearTimeout(time)
        time=setTimeout(fn,delay)
    }
}
document.querySelector("#search").addEventListener(
    "input",
    debounce(function(){
        console.log("chala")
    },400)
)
// window.addEventListener("mousemove",function())

function throttle(fn,delay){
    let last=0
    return function(){
        const now =DataTransfer.apply
    }
}

window.addEventListener("mousemove", throttle(function(){

}))

JSON.stringify({name:"harsh",age:12})