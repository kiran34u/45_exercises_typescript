var personName = "kiran Ali";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/s, function (char) { return char.toUpperCase(); }));
