let guestlist = ["Komal", "Kiran", "Hina", "Saba"];

let dontCome = guestlist[0];

console.log(dontCome, "Nahi aa sakta");

guestlist.splice(0, 1, "Sadaf");

guestlist.forEach(guest => console.log(`Salam ${guest}, would u like to Dinner with me?`));