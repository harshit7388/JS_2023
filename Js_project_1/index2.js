// promise has 2 things-  promise state and promise result
// promise state ->tells that in what state promsie is , uses fetch()
let p1 = new Promise((resolve, reject)=>{
    console.log("promise started");
    setTimeout(()=>{
        // console.log(" done");
        resolve(true)
    }, 5000)
})
// console.log(" promise is going to be printed");
// console.log(p1);



let p2 = new Promise((resolve, reject)=>{
    console.log("promise started");
    setTimeout(()=>{
        // console.log("i am a promie and i am fulfilled");
        reject(new Error(" error happened"))
    }, 5000)
})

// console.log(p2);







p1.then((value)=>{
    console.log(value);
})

p2.catch((error)=>{
    console.log("error catched");
})

