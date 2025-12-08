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