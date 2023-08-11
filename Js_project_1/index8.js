//ques 1

// function func1(ip, d) {
    
//     const words = ip.split(d);
  
   
//     // let res = words[0].toLowerCase();
//     let res = words[0];
   
  
    
//     for (let i = 1; i < words.length; i++) {
//       const capitalword = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//       res += capitalword;
//     }
    
//     return res;
//   }

//   var a = func1("The-test-case", "-");
//   var b = func1("the_First_Word_Capital", "_");
//   var c = func1("Ye,To,karnA,paDega", ",");
//   var d = func1("Hello.this.iS.Harshit", ".");
  
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);



//...................


//ques 3--with extra feature of also printing the characters that aee out of rnage

// function func1(ip){
//     var count =0 ;
//     var which_char_is_wrong = "";
    
//     for(let i = 0; i<ip.length; i++){
//         if(ip.charAt(i) >= 'a' && ip.charAt(i) <= 'n'){
//              continue;   
//         }
//         else{
//             which_char_is_wrong += ip.charAt(i) + ",";
//             count++;
//         }
//     }
//     return [which_char_is_wrong, count];
// }

// // var ans = func1("aaabdbnhaikjjm")
// // var ans = func1("abaxbdbbyyhwawiwjjjwem")
// // var ans = func1("aaaaa")
// // var ans = func1("harshitagarwal")
// console.log(ans);



//...........

//ques 2

// function func1(ip){

//     let initial_value = 0;
//     var res = []

//     for(let i=0;i<ip.length; i++){
//             let ch = ip.charAt(i);

//             switch(ch){
//                 case 'p':
//                     initial_value += 1;
//                     break;
//                 case 'm':
//                     initial_value -= 1;
//                     break;
//                 case 's':
//                     initial_value *= initial_value;
//                     break;
//                 case 'o':
//                     // initial_value += 1;
//                     res.push(initial_value);
//                     break;

//             }

//     }
//     return res;
// }

// var ans=  func1("ppppsmoso");
// // var ans=  func1("ppmsopppo");
// // var ans=  func1("harshit");// 

// console.log(ans);