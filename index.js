exports.handler = async (event) => {
  const species = event.species.toLowerCase();
  
  let name;
  
  switch(species) {
    case "dog":
      name = "Buddy";
      break;
    case "cat":
      name = "Whiskers";
      break;
    case "fish":
      name = "Bubbles";
      break;
    case "bird":
      name = "Tweety";
      break;
    default:
      name = "unknown";
      break;
  }
  
  const response = {
    statusCode: 200,
    petName: name,
  };
  return response;
};
