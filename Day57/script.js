let obj={
    name:"afdefw",
    age:12,
    email:"2dacccd",
    address:"efew"
}

class Bottel{
    constructor(){
        this.color="Blue"
        this.material="plastic"
        this.price=12121
    }
    fill(){}
    drink(){}
}
let as=new Bottel()
let as1=new Bottel()


class Sketch{
    constructor(){
        this.character="doraemon"
        this.color="blue"
       
    }
   
}

Sketch.prototype.speak=function(){}
Sketch.prototype.walk=function(){}
let sk=new Sketch()

function ab(){
    console.log(this)
}
ab()

let obj1={    //es5 function
    name:"harsh",
    func: function(){
        console.log(this.name)
    },
}
obj1.func();

let obj2={       //es6  function
    func:()=>{
        console.log(this)
    },
}
obj2.func()

let obj3={
    func: function(){
        function abc(){
        console.log(this)
    }
    abc()
    },
}
obj3.func()

let obj4={   //  Call
    name:"call"
}
function su(){
    console.log(this)
}
su.call(obj4)


let obj5={       //apply
    name:"apply"
}
function su(a,b,c,d){
    console.log(this,a,b,c,d)
}
su.apply(obj5,[1,2,3,4])


let obj6={    //bind
    name:"bind"
}
function su(a,b,c,d){
    console.log(this,a,b,c,d)
}
let  newfunc = su.bind(obj6,1,2,3,4)
newfunc()

