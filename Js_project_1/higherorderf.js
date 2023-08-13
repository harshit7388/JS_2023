

function abcd(val){
    console.log("this is abcd");    
    val();
}

abcd(function (){
    console.log("i am a passed functiion ");
})

//abcd is higher order function and and the function passed inside abcd() as a paramterr is a callback function
 