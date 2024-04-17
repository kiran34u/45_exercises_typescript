//creating a GuestList Array
let Guestlist = ["Komal", "Kiran", "Rabia", "Sadaf"];
//making veriable for those guest who come not
let dontCome = Guestlist[0];
//print the name of guest who cant come
console.log("Nahi aa sakte");
//Add or Remove value from Guestlist Array
Guestlist.splice(0, 1, "Ayesha");
//message print for bigger table
console.log("Good News ! we have found a bigger table for dinner.");
// Adding a new value of starting index of Array
Guestlist.unshift("saba");
//Adding a value at ending inbox of Array
Guestlist.push("Kanwal");
//Adding a new guest at middle index of Array
let middleIndex: number = (Guestlist.length / 2);
//Adding a new guestto middle index of Array
Guestlist.splice(middleIndex,0,"Noshi");
console.log("Updated list of our New Guest");
Guestlist.forEach(Oneguest => console.log(`Salam ${Oneguest}, would u like to dinner with me`));
// inform that only two guests invited on dinner
console.log("Unfortunatly ,the new dinner table wont arrive on time ,so i can only invite two people");
// using while lop to remove from the array until only two name remain
while(Guestlist.length > 2) {
    let removeGuest = Guestlist.pop();
    console.log(`sorry, ${removeGuest} I cant invite you to dinner`);
}
// sending invitation to the last two guests
console.log("invitation to the last two guests");

Guestlist.forEach(lastTwo => console.log(`luckly ${lastTwo}, you are still invited to diner`));
//removing last two guets from the list
Guestlist.pop();
Guestlist.pop();

console.log("Empty list:" , Guestlist);









