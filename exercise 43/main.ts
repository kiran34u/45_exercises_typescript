
function show_megicians(megicians: string[]){
    megicians.forEach(name => console.log(name));
}
// function to make megicians great through.map() it will modify array
function make_great(megician: string[]){
   return megician.map(name => `The Great ${name}`);
}

// define an array of megician name
let megicians_name = ["Kiran" , "Hamza" , "Harry poter"]

// making a copy of orignal array through .slice function

let copy_megician_name = megicians_name.slice()

// modify the copied array  to include "the great" with their names
let copy_great_megician = make_great(copy_megician_name);

// show both array orignal and copied
show_megicians(megicians_name);
//copied
show_megicians(copy_great_megician);