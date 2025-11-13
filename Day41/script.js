function add(a,b){
    sum=a+b
    console.log(sum)
}
add(1,5)

function guest(guest="guest"){
    console.log(`Hii ${guest}`)
}
guest("Ajay")
guest()

//1
// function runTwice(function){

// }

//2
function pure(a,b){
    console.log(a+b)
}
pure(1,2)
pure(1,2)

//3
 let global=0
function inpure(a){
    global++
    console.log(a+ global)
}
inpure(2)
inpure(2)

//4
function abcd({name,age}){
    console.log(name,age)
}
abcd({name:"ksas",age:12})

//5 this keyword

//console.log(this)

let obj={
    name:"jg",
    fun: function(){
        console.log(this)
    },
    fun2: () =>{
        console.log(this)
    },
}
obj.fun()
obj.fun2()

//6
let arr=[1,2,3,4,5,5,6]
let newar = arr.map(function(val){
    return val*val 
})
console.log(newar)

//7

let arr1=[1,2,3,4,6,8,4,8]
let newa = arr1.filter(function(val){
    return val%2 === 0
})
console.log(newa)

//8

let salary = [1000,2000,3000,4000,5000]
let total = salary.reduce(function(acc,val){
    return acc+val

},0)
console.log(total)

//9

let names=["qeqe","ajay","awan","shyam","pal"]

let ans=names.some(function(val){
    return val.length>3

})
console.log(ans)

//10

let user ={
    name:"kar",
    age:"12",
    email:"kiwnka@ajfaf",
}
user.age=188
//Object.freeze(user)

function ac(){
}
ac()



