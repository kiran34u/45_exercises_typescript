// define a function with a rest perametar that accept items arguments repersenting our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy Sandwich");
}
// call the function 3 times with three diffrent  numbers of arguments
makeSandwich("Chicken", "cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter ", "Mayo", "Egg", "Cheese", "Chicken", "Tomato");
