// // Variables
// // Days of the week

// let dayOfWeek = "Monday"
// console.log(dayOfWeek)
// dayOfWeek = "Friday"
// console.log(`I can't wait for ${dayOfWeek}!`)

// // User Input

// let animalInput = prompt("What is your favorite animal?")
// let colorInput = prompt("What is your favorite color?")
// console.log(`I've never seen a ${colorInput} ${animalInput}!`)


// Conditionals
// Meals

let timeOfDay = "food"
let mysteryMeal
if(timeOfDay < 1200){
    mysteryMeal = "Cereal"
}
else if(timeOfDay < 1700){
    mysteryMeal = "Sandwich"
}
else if(timeOfDay >= 1700){
    mysteryMeal = "Steak"
}
console.log(mysteryMeal)

// Random Number

let randomBand = Math.floor(Math.random() * 11)
console.log(randomBand)
if(randomBand <= 2){
    console.log("Beatles")
}
else if(randomBand <= 5){
    console.log("Stones")
}
else if(randomBand <= 8){
    console.log("Floyd")
}
else{
    console.log("Hendrix")
}
