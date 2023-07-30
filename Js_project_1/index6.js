
//   button.onclick = function(event) {
//     if (event.altKey && event.shiftKey) {
//       alert('Hooray!');
//     }
//   };



function count(){
    for(let i=1; i<=3; i++)
        alert("count number:"+i);

}


//creating button using JS
var jsbutton = document.createElement("button");
jsbutton.innerHTML = "js-btn";
document.body.appendChild(jsbutton)
