// Array of recipe objects
var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

console.log(recipes);

// @TODO: YOUR CODE HERE
var dish=[];
var spice=[];
recipes.forEach((d)=>{
  Object.entries(d).forEach(([key,value])=>{
  if(key==="dish"){
    dish.push(value);
  }
  else {
    spice.push(value);
  }

  });
});
console.log(dish);
console.log(spice);
//bonus
// var disharray=recipes.map(re=>re.dish);
// var spicearray=recipes.map(re=>re.spice);
// console.log(disharray);
// console.log(spicearray);