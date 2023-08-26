
function outer(){
    const name = "abcd"
    
    function inner(){ 
    console.log(name)
}
inner();
}
outer();

//closures scope chain

var user = "harshit"
function outer(){
    const name = "abcd"
    
    function inner(){ 
    console.log(name, user)
}
inner();
}
outer();
