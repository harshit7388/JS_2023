
var  human = {
    walk : true,
    talk : true,
    hands: 4
}

var student ={
    class : 11,
    age: 22
}

// student obj inherits the property of human obj using .__proto__ 

student.__proto__ =  human;

//  the extra properties that student obj is inherting from human obj, is stored in prototype
