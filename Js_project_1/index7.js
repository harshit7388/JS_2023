// let sum = (a,b)=>{
// let ans = a+b;
//    return ans;
// } 

// console.log(sum(1,2));


//settimeout and 'this' keyword issue

// let user = {
//    name:"john",
//    func(){
//       console.log("hello", `${this.name}`);
//    }
// }

// setTimeout(user.func, 2000)



// solution is using wrapper function or function binding

let user = {
   name:"john",
   func(){
      console.log("hello", `${this.name}`);
   }
}
setTimeout(function(){
   user.func();  // we are wrapping the function func() by creating an anonymous function inside setTimeOut()
}, 3000)