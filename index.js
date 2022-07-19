function scuberGreetingForFeet(feet){
  if (feet <= 400) {
      return "This one is on me!"
  } else if (feet > 400 && feet < 2000) {
      return 'That will be twenty bucks.'
  } else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.'
} else if (feet > 2500) {
  return 'No can do.'
}
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
  
  
  // WORKS BUT WRONG
  // if (city === 'NYC') {
  //     return 'Ok, sounds good.'
  // } else if (city != 'NYC') {
  //   return 'No go.'
  // }
  }
 

// const tip = 'generous';
// let message
function switchOnCharmFromTip(tip){

  switch (tip) {
        case 'generous':
          return 'Thank you so much.';
        case 'not as generous':
          return 'Thank you.';
        default:
          return "Bye.";
          
  // if (tip === 'generous') {
//     return 'Thank you so much.'
// } else if (tip === 'not as generous') {
//     return 'Thank you.'
// } else if (tip != 'generous' || 'not as generous') {
//     return 'Bye.'
// }
}
//     
}