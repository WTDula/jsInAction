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


// // Conditionals
// // Meals

// let timeOfDay = "food"
// let mysteryMeal
// if(timeOfDay < 1200){
//     mysteryMeal = "Cereal"
// }
// else if(timeOfDay < 1700){
//     mysteryMeal = "Sandwich"
// }
// else if(timeOfDay >= 1700){
//     mysteryMeal = "Steak"
// }
// console.log(mysteryMeal)

// // Random Number

// let randomBand = Math.floor(Math.random() * 11)
// console.log(randomBand)
// if(randomBand <= 2){
//     console.log("Beatles")
// }
// else if(randomBand <= 5){
//     console.log("Stones")
// }
// else if(randomBand <= 8){
//     console.log("Floyd")
// }
// else{
//     console.log("Hendrix")
// }

// // Loops

// for(let i = 0; i < 7; i++){
//     console.log("JavaScript is better than python!")
// }
// for(let i = 0; i < 11; i++){
//     console.log(i)
// }
// for(let i = 0; i <= 4; i++){
//     console.log("hello\ngoodbye")
// }

// // Functions
// // Favorite movie

// function printMovieName(){
//     let myFavoriteMovie = "Robin Hood Prince of Thieves"
//     console.log(myFavoriteMovie)
// }
// printMovieName()

// // Favorite Band

// const enterFavoriteBand = () => {
//     let userInput = prompt("What is your favorite band?")
//     return userInput
// }
// let userFavoriteBand = enterFavoriteBand()
// console.log(userFavoriteBand)

// // Concert

// function concertDisplay(musicalAct){
//     let myStreet = prompt("Please enter the name of the street you live on")
//     console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`)
// }
// concertDisplay(userFavoriteBand)

// Arrays

let desktopItems = ["chair", "tv", "remote"]
console.log(desktopItems[1])
desktopItems.push("Infinity Gauntlet")
for(let i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i])
}
