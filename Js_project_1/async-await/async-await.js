// const datas = [
//     {
//         name:"ajay", job:"swe"
//     },
//     {
//         name:"raj", job:"sde"
//     }
// ];


// function getDatas(){

//     setTimeout(()=>{
//         let output= "";
//         datas.forEach((data, index)=>{
//             output += `<li>${data.name}</li>`
//         })
//         document.body.innerHTML = output
        
//     },1000)
// }


// function createData(newdata, callback){
//     setTimeout(()=>{

//         datas.push(newdata)//pushing element to 'datas' array
//         callback();
//     },2000)
// }

// createData({name:"harshit", job:"manager"}, getDatas)



/*
getDatas function will run in 1 sec and creataData() will be running in 2 sec, therefore if we doesnt use callback, then 
because getDatas gets executed in 1 sec, it doesnt lets createData() to print its value , as creataData() is called inside getDatas()

if we make such timing like getDatas getx executed in time more than createData(), then the created value also gets printed.


:: Therefore vcallback is used, so that when new value gets created then only the getDatas() will run, this will print all the 

values including the
last created value as well.


*/


// do the above same task using promises

// const datas = [
//     {
//         name:"ajay", job:"swe"
//     },
//     {
//         name:"raj", job:"sde"
//     }
// ];


// function getDatas(){

//     setTimeout(()=>{
//         let output= "";
//         datas.forEach((data, index)=>{
//             output += `<li>${data.name}</li>`
//         })
//         document.body.innerHTML = output
        
//     },1000)
// }
// // getDatas();

// function createData(newdata){

//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             datas.push(newdata)
//             let error = false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject("kuch shi nhi hua ")
//             }
//         },2000)
//     })
// }

// createData({name:"harshit", job:"manager"}).then(getDatas)
// .catch(error => console.log(error))





// now use async-await in the above code
const datas = [
    {
        name:"ajay", job:"swe"
    },
    {
        name:"raj", job:"sde"
    }
];


function getDatas(){

    setTimeout(()=>{
        let output= "";
        datas.forEach((data, index)=>{
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output
        
    },1000)
}
// getDatas();

function createData(newdata){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            datas.push(newdata)
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject("kuch shi nhi hua ")
            }
        },2000)
    })
}

async function start(){
   await createData({name:"harshit", job:"manager"})
   getDatas();
}
start();