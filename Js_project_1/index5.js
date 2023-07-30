// promise API

let p1 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("value 1");
    }, 1000)
})
let p2 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        // resolve("value 2");
        reject(new Error("it has error"));
    }, 2000)
})
let p3 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("value 3");
    }, 3000)
})


// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })



// Promise.all() basically call all .then at once instead of writing them separately

// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value);
// })




//.....................




// Promise.allSettled() --provides the result of the promise if any of them has an error.
//  whereas promise.all() will print the error and not provide result further
// as soon the error is encountered it stops the execution any further.

// let promise_all = Promise.allSettled([p1,p2,p3]) // will print all the three promises's values with their states as well
// promise_all.then((value)=>{
//     console.log(value);
// })





//............................




// promise.race() will give the value that gets resolved first , like  here value1 will be resolved first as it has least time
// however if error is encountered, it stops .


// let promise_all = Promise.race([p1,p2,p3]) 
// promise_all.then((value)=>{
//     console.log(value);
// })



//ignores the error and waits for theh promise which gets fulfilled first.
let promise_all = Promise.any([p1,p2,p3]) 
promise_all.then((value)=>{
    console.log(value);
})


