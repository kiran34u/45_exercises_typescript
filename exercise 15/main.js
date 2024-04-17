var guestlist = ["Komal", "Kiran", "Hina", "Saba"];
var dontCome = guestlist[0];
console.log(dontCome, "Nahi aa sakta");
guestlist.splice(0, 1, "Sadaf");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would u like to Dinner with me?")); });
