// Array of current users
var current_Users = ["Noshi", "Kiran", "Kanwal", "Kashan", "Shahmeer"];
// Array new users
var new_Users = ["Ali", "kiran", "Rabia", "Gohar", "shahmeer"];
// loop through new usernames to check for usernames availblities
new_Users.forEach(function (new_one_user) {
    // making a condition for username already exit and save in our condition veriable
    var our_Condition = current_Users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_Condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
