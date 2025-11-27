const para=document.querySelector('p')
const charac="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text=para.innerText

let iter=0

// function random(){

//     const str=text.split('').map((char,index)=>{
//         if(index<iter){
//           return char
//         }
//           return charac.split("")[Math.floor(Math.random()*53)]
//         }).join("")
//         para.innerText=str

//         iter+= 0.2
//         console.log(iter)  
// }
// setInterval(random,30)


para.addEventListener("mouseenter",()=>{
     setInterval(()=>{
        const str=text.split('').map((char,index)=>{
            if(index<iter){
                return char
            }
            return charac.split("")[Math.floor(Math.random()*53)]
        }).join("")
        para.innerText=str
        iter+= 0.1
    //    console.log(iter)
     },100 ) 
})