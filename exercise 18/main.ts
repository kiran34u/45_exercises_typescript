// making a array of countriesamd print its orignal order
let countrytovisit: string[] = ["japan" , "Pakistan" ,"America" , "China"];

console.log("Orignal order:");
//print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical order:"),[...countrytovisit].sort();
// show that the array is still in orignal order
console.log("Still in orignal order:" , countrytovisit);
// print the order in reverse order without modifying the actual array list
console.log("Reverse order:" ),[...countrytovisit]; 
// show that the array is still in orignal order
console.log("Still in orignal order:" , countrytovisit);
// we have change orignal array order now
console.log("Orignal Array Reversed:" , countrytovisit.reverse());
//print the array to show that it is back to its orignal order
console.log("Back to orignal order:" , countrytovisit.reverse());
// print the array to show that its order has been changed in alphabetical order
console.log("Sorted in Alphabetical order:" , countrytovisit.sort());
//we have changed the orignal array order now in reverse order again
console.log("Orignal Array Reversd:" , countrytovisit.reverse());