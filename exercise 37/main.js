// Making function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// calling a function with by default values
make_shirt();
// calling a function now with medium size shirt
make_shirt("Medium");
// calling a function now with small size and different print message
make_shirt("Small", "I Love JavaScript");
