// define a function with a rest perametar that accept items arguments repersenting our sandwich
function makeSandwich(... items: string[]){
console.log("\nMaking a sandwich with the following items: \n");
items.forEach(singleItem => console.log(singleItem));
console.log("\nNow enjoy Sandwich");

}

// call the function 3 times with three diffrent  numbers of arguments
makeSandwich("Chicken" , "cheese" , "Mayo" , "Egg");

makeSandwich("Bread" , "Butter");

makeSandwich("Bread" , "Butter " , "Mayo" , "Egg" , "Cheese" , "Chicken" , "Tomato");
