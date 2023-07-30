// let promise = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         resolve("promises resolved")
//     }, 3000)
// })



async function f(){
    let promise = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve("promises resolved")
        }, 3000)
    })
    
    
        let p = await promise;
        console.log(p);
        console.log("done ");
}

f();

//either we can create promise inside and async function or declare it outside it and call it inside and async function
// await waits for the promise to get fulfilled: either reject or resolve

// until the promise returns a value, console.log("done") will not be be printed

