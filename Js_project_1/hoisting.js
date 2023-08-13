
// console.log(a);
// fun();
// // the above two lines will run correctly due to hoisting. 
// // the console.log(a) line 2 -- will print undefined until it finds the initialization of 'a'. that is its value.

// function fun(){
//     console.log("printing this text");
// }

// var a=9;
// // a=9;
// // console.log(a);



// ...............




// // using let
// console.log(a);
// fun();

// function fun(){
//     console.log("printing this text");
// }

// let a;
// // console.log(a);




// ...............



// //using const
// console.log(b);
// fun();

// function fun(){
//     console.log("printing this text");
// }

// const b=9;
// // a=9;
// // console.log(a);




// let and const both leads to error , only var works as its global accessible (global scope)

func();
var func = function(){
    console.log("heyy ");
}
// hoisting in JS is not appplicable to function with var 
