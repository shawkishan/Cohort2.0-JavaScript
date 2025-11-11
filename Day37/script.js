function ab({name,age,phone}){  //destructured 
    console.log(name,age,phone)
}
ab({name:"aasd",age:13,phone:2132432534643})

function abc(...val){  //rest
    console.log(val)

}
abc(1,2,3,4)

function aa(a,b,c){  //default
    console.log(a,b,0)

}
aa(1,5)

function abc(a,b,c,d){  //positional
  console.log(a,b,c,d)
}
abc(1,2,34,4)


function abcd(a,b,c,d){  //spread
  console.log(a,b,c,d)
}

let arr=[1,2,3,4,]
abcd(...arr) 