const para=document.querySelector('p')
const charac="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text=para.innerText


para.addEventListener("mouseenter",()=>{
    
     setInterval(()=>{
        const str=text.split('').map((char,index)=>{
            return charac.split("")[Math.floor(Math.random()*53)]
        }).join("")
        para.innerText=str
     },100)
        

    
    
})