

// let count = 0;

// (function abcd(){
//     if(count ===0){
//             let count = 1;
//             console.log(count)
//     }
//     console.log(count)
// }
// )();


let count =1;
(function abcd(){
    
    console.log(count) 
    console.log("hello")
})();







//optimsie this below code using closures
// function find(index){
//     let a = []
//     for(let i=0; i<1000000; i++){
//         a[i] = i*i;
//     }
//     console.log(a[index])
// }

// console.time("6")
// find(6);
// console.timeEnd("6")

// console.time("12")
// find(12);
// console.timeEnd("12")






// function find(){
//     let a = []
//     for(let i=0; i<1000000; i++){
//         a[i] = i*i;
//     }
//     return function(index){
//         console.log(a[index])

//     }
// }
//  var closures = find();

// console.time("6")
// closures(6)
// console.timeEnd("6")

// console.time("12")

// closures(12)
// console.timeEnd("12")