// function abcd(){
//     for(var i=0; i<3; i++){
//         setTimeout(()=>{
//             console.log(i)
//         }, i*1000)
//     }
// }

// abcd(); 

 // 3 3 3 ..i jo ki var hai, har bar new scope banane ki jagah woo uske reference ko update krta hai, aur jab tk for wali line 
// puri tarah se false nahi ho jati , tab tk settimeout nahi chalega, coz wo ek callback() hai
//  jaise hi i=3 hua, for loop condition false hui, to last i ki value 3 thi.. to whi settimeout m jayegai aur 3 3 3 print hoga



// // solution is to use let in palce of var

// function abcd(){
//     for(let i=0; i<3; i++){
//         setTimeout(()=>{
//             console.log(i)
//         }, i*1000)
//     }
// }

// abcd();
 // 0 1 2 





// also using var we can get 0 1 2 output : by using closures

// solution is to use let in palce of var

// function abcd(){
//     for(var i=0; i<3; i++){
    
//         function inner(i){
    
//             setTimeout(()=>{
//                 console.log(i)
//             }, i*1000)
//         }
//         inner(i);
//     }
// }
// abcd();





