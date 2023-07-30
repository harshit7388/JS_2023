// // promise chaining

// let p = new Promise((resolve, reject)=>{
// console.log("promise started");
//     setTimeout(()=>{
//         resolve(10);
//     }, 3000)
// });

// p.then((value)=>{
//     console.log(value);
//     return value*2;
// }).then((value)=>{
//     console.log(value);
//     return value*3;
// }).then((value)=>{
//     console.log(value);
//     return value*4;
// }).then((value)=>{
//     console.log(value);
//     return value*5;
// })



// console.log("promise ended");

//.............................


//creating custom promises in chaining
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// p.then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value * 2);
//         }, 3000);
//     });
// }).then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value * 3);
//         }, 4000);
//     });
// }).then(value => console.log(value));






//attaching multiple handlers to a promise
//each handler executes independently unlike chaining.

let p = new Promise((resolve, reject)=>{
        // alert("loaded");
        console.log("starting");
        setTimeout(()=>{
            resolve(4);
        }, 3000);
})

p.then(()=>{
   
    console.log("this is executed-1");
}
)
p.then(()=>{
    console.log("this is executed-2");
}
)