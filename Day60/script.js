function afterDelay(time,cb){
    setTimeout(function (){
       cb();
    },time)
         
}
afterDelay(3000,function(){
    console.log("Callback Executed")
})

function getUser(username,cb){
    setTimeout(()=>{
        cb({id:1,Username:"Harsh"})
    },1000)
}

function getUserPots(id,cb){
    setTimeout(()=>{
        cb(["hello","GoodBOY","Hiii"])
    },2000)
}


getUser("Harsh", function(data){
    getUserPots(data.id,function(allpots){
        console.log(data.username,allpots)
    })
})

function loginUser(username,cb){
    console.log("Logging in User....")
    setTimeout(()=>{
        cb({id:121,username:"Yes"})
    },1000)
}
function fetchPermissions(id,cb){
    console.log("Fetching Data....")
    setTimeout(()=>{
        cb(["weww","23f"])
    },2000)
}

function loadDasbord(permissions,cb){
    console.log("Load Dasbord....")
    setTimeout(()=>{
        cb()
    },2000)
}
loginUser("Yes",function(userdata){
    fetchPermissions(userdata.id,function(permissions){
        loadDasbord(permissions,function(){
            console.log("Permission Loded")
        })
    })
})

