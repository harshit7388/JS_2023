async function abcd(){
 let rawdata =  await fetch(`https://randomuser.me/api/`);
 let ans = await rawdata.json();
 console.log(ans);
}

abcd();