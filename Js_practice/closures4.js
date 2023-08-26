
let view;
function abcd(){
    let count = 0;
    return function(){
        if(count>0){
            console.log("already done");
        }
        else{
            view = "done"
            console.log("hey", view)
            count++;
        }
    }
}
let ans = abcd();
ans();
ans();
ans();
ans();
ans();