function printCallvallue(i){
    console.log("this is call number : "+i);

}

function first(callback)
{
setTimeout(()=>{
    let i=1;
    callback(i);
    i++;
    setTimeout(()=>{
        callback(i);
        i++;
        setTimeout(()=>{
            callback(i);
            i++;
            setTimeout(console.log("final"),3000)}, 3000)},3000)}, 6000)
}

first(printCallvallue)
// callbacks functions inside another callback function create callbackhell or nested callbacks
// 2 problems will callback() -> callback hell and inversion control

