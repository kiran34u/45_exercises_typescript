let apple = "Apple";
let upperCaseApple = "Apple";
let ten = 10;
let twenty =20;
let fruits = ["apple" , "banana" , "orange"];
// test for equality and inequality with strings

console.log("Is apple is equal to apple?");
console.log(apple == "apple" );

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

//taste using lowercase function
console.log("Is Apple is equal to apple after converting to lowerCase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nIs Apple is not equal to apple after converting to lowerCase?");
console.log(upperCaseApple.toLocaleLowerCase() != "apple");

// numerical test
console.log("\nIs ten equal to twenty?");
console.log(ten == twenty);

console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);
// greator than 
console.log("\nIs ten is greator than zero?");
console.log(ten > 0);

// less than
console.log("\nIs twenty is is less than 10");
console.log(twenty < 10);

//greator than equal to
console.log("\nIs  ten is greator than or equal to 5?");
console.log(ten >= 5);

//less than or equal to
console.log("\nIs twenty is less than or equal to 10");
console.log(twenty <= 10);

// test is using and or operator
console.log("\n twenty is not equal to 10 and twenty is greator than 10");
console.log(twenty != 10 && twenty > 10);
// using &&
console.log("\n twenty is not equal to 10 and twenty is greator than 10");
console.log(twenty != 10 && twenty > 30);

// using || or
console.log("\n 20 is greator than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greator than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//test wheather an item is include in array
console.log("Is orange include in my fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange"));








