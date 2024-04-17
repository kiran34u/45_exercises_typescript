function show_megicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
// function to make megicians great through.map() it will modify array
function make_great(megician) {
    return megician.map(function (name) { return "The Great ".concat(name); });
}
// define an array of megician name
var megicians_name = ["Kiran", "Hamza", "Harry poter"];
// making a copy of orignal array through .slice function
var copy_megician_name = megicians_name.slice();
// modify the copied array  to include "the great" with their names
var copy_great_megician = make_great(copy_megician_name);
// show both array orignal and copied
show_megicians(megicians_name);
//copied
show_megicians(copy_great_megician);
