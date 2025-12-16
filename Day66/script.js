
 //Destructuring
var arr=[12,13,14,15,16]
var arr1=arr
console.log(arr)
arr1.push(10)
console.log(arr1)


var ar=['abhino','afad','qefqef','qefqegq']

var[a,b,...c]=ar//rest operator
console.log(c)

var obj={
    user:'sarthk',
    age:29,
    city:'qefef'
}

var obj2=obj
var obj2={...obj}

obj2.city='patana'
console.log(obj)

//console.log(obj2)

var obj1={
    user1:'Dhone',
    age:29,
    city:'Ranchi',
    skills:['js','react']
}

var {user1}=obj1
console.log(user1)

// var {skills}=obj1
// var[first,...restskills]=obj1
// console.log(restskills)


//import export topic
import kink from './app.js'
import ski from './text.js'
import {user} from './text.js' //name import

console.log(kink)
console.log(ski)
console.log(user)


