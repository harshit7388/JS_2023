// let say hamare pas ek func hai and ek ibj hai, us func ke nadar hamne 'this' use kara hai
// , aur ham chahte hai ki 'this' apni default value'window' 
// ko na refer karke ek us object ko point kare ,tab ham call() use karte hai


// function abcd(){
//     console.log(this);
// }

// var obj ={
//     name: "harshit"
// }

// abcd.call(obj);



// function abcd(val1, val2, val3){
//     console.log(this, val1, val2, val3);
// }

// var obj ={
//     name: "harshit"
// }

// // abcd.call(obj, 1,2,3);
// abcd.apply(obj, [1,2,3]);






//bind- bind kar deta hai func and obj ko


function abcd(){
    console.log(this);
}

var obj ={
    name: "harshit",
    age:23
}

var x = abcd.bind(obj);
x();

