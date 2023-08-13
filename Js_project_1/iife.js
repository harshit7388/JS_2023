// iife- immediately invoked function expression

 var ans = (function(){
        var privatevalue = 12;
        return {
            getter: function(){
                console.log(privatevalue);
            }, 
            setter: function(val){
                privatevalue = val;
            }
        }
 })()
