function show_megicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
function make_great(megician) {
    return megician.map(function (name) { return "The Great ".concat(name); });
}
// define an array of megician name
var megicians_name = ["Kiran", "Hamza", "Harry poter"];
var great_megicians = make_great(megicians_name);
console.log(great_megicians);
show_megicians(great_megicians);
