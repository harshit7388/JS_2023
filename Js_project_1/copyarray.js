// var a =  [ 1,2,3,4,5,6]
// // a.pop();
// // console.log(a);
// var b = a
// b.pop();
// console.log(a);



// copying array a -> b

var a = [1,2,3,4,5]
var b = [...a]  // ... is a spread operator
b.pop();
b.pop();
b.pop();
b.pop();
console.log(a);
