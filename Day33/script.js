for(let i=1; i<21; i++){
    if(i%2===0){
        console.log(i)
    }
}

for(let i=1; i<6; i++){
    console.log("yes")
}


for(let i=1; i<11; i++){
    if(i%2===0){
        console.log(`${i}-even`)
    }
    else{
        console.log(`${i}-Odd`)
    }

}

// let num= +prompt("Enter a Number")
// //console.log(typeof num)
// if(num>=0){
//     console.log("it posit")
// }
// else{
//     console.log("it is negative")
// }

let num1= prompt("Enter a age")
//console.log(typeof num)
if(num1 === null)
{
    console.error("you pressed cancel")
}
else{
    if(num1.trim() === ""){
        console.error("BHai dhang se likha le")
    }else{

    num1=Number(num1.trim())
    if(isNaN(num1)){
        console.error("Bhai Please number dall")
    }
    else{
        console.log("Confirm ye number")
    }
}
    
}

