let pp = new Promise((resolve, reject)=>{
setTimeout(()=>{
reject(new Error("done"))
},5000);
})

// pp.then(alert);


// pp.then((value)=>{
// console.log(value);
// })