//creating a GuestList Array
var Guestlist = ["Komal", "Kiran", "Rabia", "Sadaf"];
//making veriable for those guest who come not
var dontCome = Guestlist[0];
//print the name of guest who cant come
console.log(dontCome, "Nahi aa sakte hain");
//Add or Remove value from Guestlist Array
Guestlist.splice(0, 1, "Ayesha");
//message print for bigger table
console.log("Good News ! we have found a bigger table for dinner.");
// Adding a new value of starting index of Array
Guestlist.unshift("saba");
//Adding a value at ending inbox of Array
Guestlist.push("Kanwal");
//Adding a new guest at middle index of Array
var middleIndex = (Guestlist.length / 2);
//Adding a new guestto middle index of Array
Guestlist.splice(middleIndex, 0, "Noshi");
console.log("Updated list of our New Guest");
Guestlist.forEach(function (Oneguest) { return console.log("Salam ".concat(Oneguest, ", would u like to dinner with me")); });
