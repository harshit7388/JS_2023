/* 
asynchronous JS
console.log("start");

setTimeout(function(){
console.log("this is good");
}, 4000)

console.log("end");
 */
 
 
 //callbacks
 
/*  
 const message = function(){
 console.log("started running");
 }
 
 setTimeout(message, 3000);
  */
  
  
 // here message is a callback function as it gets executed after 3000ms 
 
 
 
 
 /* setTimeout(function(){
 console.log("this is an anonymous function, as it has no name and declared completey inside another setTimeout ");
 }, 3000) */
 
 
 
 /* 
 setTimeout(()=>{console.log("arrow function")}, 3000) // callbacks as an arrow function 
  */
  
  
  //creating button and adding event listener to it. 
  
  document.querySelector(".callback-btn").addEventListener("click", 
  function(){
	console.log("button is clicked");
	})
	
	

  
	
	
	
	
	
	
	
	
   
   