/* syntax 

var p = new Promise((resolve, reject)=>{
    if(true){
        return resolve();
    }
    else{
        return reject();
    }
})

p
.then(function(){
    console.log("resolved");
})
.catch(function(){
    console.log("'reject");
});

*/




var ans = new Promise(function(resolve, reject){
    return resolve("done1");
})

var p2 = ans.then(function(data){
    console.log(data);
    return new Promise(function(resolve, reject){
        return resolve("done2");
    })

})

var p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(resolve, reject){
        return resolve("done3");

    })
})
p3.then(function(data){
    console.log(data);
})