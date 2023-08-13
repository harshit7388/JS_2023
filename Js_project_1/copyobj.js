//creating an object

var obj = {
    name : "harshit"
}; // this whole is an object enclosed in {}

var copyobj = {
    ...obj  // copying the obj -> copyobj using spread operator
};

console.log(copyobj);
copyobj.name = "abc" // changing the object value
console.log(copyobj); 