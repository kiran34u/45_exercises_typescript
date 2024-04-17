var userName = ["Noshi", "Kiran", "Kanwal", "Admin", "Kashan"];
userName = [];
if (userName.length === 0) {
    console.log("Your Array in Empty we need to find some users!");
}
else {
}
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging again."));
    }
});
