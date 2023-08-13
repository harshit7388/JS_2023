var obj  ={
    name : "harshit",
    age : 23,
    city : "lko"

}
// for(var key in obj){
//     console.log(key, obj[key]); // obj[key] will print the value of particular key
    
// }
console.log("before deleting object prop");
console.log(obj);

delete obj.name; // used to delete a particular object prop , such as name or age or city

console.log("after deleting object prop");
console.log(obj);



