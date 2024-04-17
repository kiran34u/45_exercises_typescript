// creating a Array
let userNames = ["Noshi" , "Kiran" , "Kanwal" , "Admin" , "Kashan"];

// using foreach loop on Array
userNames.forEach(oneUser =>{
    if(oneUser ==="Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
