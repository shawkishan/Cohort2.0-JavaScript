// let i=1
// while(i<10){
//     console.log("hello");
//     i++
// }

// let a= prompt("Enter a cha")
// while(a !== "stop"){
//     console.log(a)
//     a=prompt("Enter a password")
// }

let atem=0
let paas1="hhaha"
let khul= false
let pass = prompt("Enter a password")
atem++

if(pass===paas1) khul = true

while(pass !== paas1){
    if(atem === 3){
        console.error("Account is locked")
        break;
    }
    pass = prompt("Enter a password")
    if(pass === paas1)  khul = true
    atem++
}

if(khul === true) console.log("acccount Open")