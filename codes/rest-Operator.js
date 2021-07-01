// From the definition we saw earlier, rest parameters collect all the remaining elements into an array.

function displayColor(message,...colors){
    console.log(message);
   
    //  console.log(colors) -- [ 'A message', 'Red', 'Yellow', 'Blue' ]
     for(let i in colors){
         console.log(colors[i])
     }
 }
 
 let message= 'A message';
 displayColor(message, 'Red', 'Yellow', 'Blue');



// 
// function displayColor(message,afterMessage,...colors){
//     console.log(message);
//       console.log(afterMessage);
 
//     //  console.log(colors) -- [ 'A message', 'Red', 'Yellow', 'Blue' ]
//      for(let i in colors){
//          console.log(colors[i])
//      }
//  }
 
//  let message= 'A message';
//  let afterMessage = 'last message'
//  displayColor(message, afterMessage,'Red', 'Yellow', 'Blue');