console.log('Welkomme!');

//  Variables

// Let variable saving the number 28 on the name age
let age = 19;
// Chaining method:
console.log("min alder er:", age)
// Teplate litteral
console.log(`Min alder er: ${age}`)
console.log(typeof age)

// Const variable saving the string Thomas on the name (name)
const name = "Thomas";
console.log("mit navn er:", name)
console.log(typeof name)

// Const variable saving the boolean true on the name isPresent
const isPresent = true;
console.log("Er tilstede?", isPresent)
console.log(typeof isPresent)

//
//  skille mellom store deler med kode
//

// Two const variables saving strings 
// One const variable saving the data from the two first variables
const firstName = "Thomas";
const lastName = "Hovland";
const fullName = firstName + " " + lastName;
console.log("fullname variable viser:", fullName)

const htmlElement = document.querySelector("#java-script-data")
htmlElement.textContent = fullName;