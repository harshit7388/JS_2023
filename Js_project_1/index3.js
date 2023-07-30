let pp = new Promise((resolve)=>{
setTimeout(()=>{
resolve("done")
},5000);
})

pp.then(alert);


// pp.then((value)=>{
// console.log(value);
// })