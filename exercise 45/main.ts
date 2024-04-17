// define a function to create a car object with optional options ...
function create_car(manufacturer, model, ...options){
// intialize a car object with manufacturer and model
let car = {
    manufacturer: manufacturer,
    model: model
};

// add additional options to car object
options.forEach(option =>{
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
});

return car;
}

// call the function to create a car object
let my_car = create_car("Toyota" , "Corrolla" , "color: Black" , "Sunroof:True");

// print the veriable to ensure all the information is stored correctly in the car object
console.log(my_car);