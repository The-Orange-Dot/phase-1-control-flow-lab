function scuberGreetingForFeet(feet){
  if (feet < 200) {
    return "This one is on me!"
  } else if (feet < 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  return (city == "NYC" ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tip){

  let response;

  switch(tip) {
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
      break;
  }

  return response;
}