// const url = "https://catfact.ninja/fact";

console.log("a");
const fetchData = ()=>{
    fetch("https://catfact.ninja/fact")
    .then((response) => {
        console.log("then 1");
        return response.json;
    }).then((data)=>{
        console.log("then 2");
        console.log(data);
    })
}

fetchData();
console.log("z");