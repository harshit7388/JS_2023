// function abcd(){
//     console.log(this);
// }

// abcd();



var obj  ={
    name:"harshit",
    val : function(){
        console.log(this);
    }
}

obj.val();   // this inside the objects property , will referrence the object, so when val() is called, due to 'this'
// keyword , complete object's data will be displayed

// console.log(obj);

/*

// this code is written to show how to create a button using JS
var btn = document.createElement("button");
btn.innerHTML ="2023 button";
document.body.appendChild(btn)

btn.addEventListener("click", function(){
    alert(btn.innerHTML)
    alert(btn.innerText)
})

*/




// kisi bhi event listener par 'this' keyword lagta hai to wo refer karta hai, addevent listener se lage
//  pahle wale element ko, jaise ki below code main, addEventListener se pehle ek btn hai.. to compelete btn will be the result


var btn = document.querySelector("button");
btn.addEventListener("click", function(){
    // console.log(this);
    this.style.color = "red";
})