function copyText(){

    let copiedTextid = document.getElementById("textfield")
    copiedTextid.select();
    navigator.clipboard.writeText(copiedTextid.value);
    alert(copiedTextid.value)
}



//1-  text area element ko access kia via its id
//2- us id ke inside jo content h usko select kia
//3- us text ko select krke copy krlia using navigator api
//4- copiedtext ki value ko handle krlia


