// define a function to print each megician from an Array
function show_megicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
// define an Array containing megicians name
var megician_name = ["Kiran", "Hamza", "Harry porter"];
//call the function to print each megician name
show_megicians(megician_name);
