
function show_megicians(megicians: string[]){
    megicians.forEach(name => console.log(name));
}
// function to make megicians great through.map() it will modify array
function make_great(megician: string[]){
   return megician.map(name => `The Great ${name}`);
}

// define an array of megician name
let megicians_name = ["Kiran" , "Hamza" , "Harry poter"]
// call make great function to modify megicians name
let great_megicians = make_great(megicians_name);
console.log(great_megicians)
// call show megicians function that show modify list of megicians
show_megicians(great_megicians)