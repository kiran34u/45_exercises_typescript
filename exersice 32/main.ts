// Array of current users
let current_Users = ["Noshi" , "Kiran" , "Kanwal" , "Kashan" , "Shahmeer"]
// Array new users
let new_Users = ["Ali" , "kiran" , "Rabia" , "Gohar" , "shahmeer"]

// loop through new usernames to check for usernames availblities
new_Users.forEach(new_one_user =>{
  // making a condition for username already exit and save in our condition veriable
    let our_Condition = current_Users.some (current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_Condition){
console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})