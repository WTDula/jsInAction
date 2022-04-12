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

// let timeOfDay = 1300
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

// // Arrays

// let desktopItems = ["chair", "tv", "remote"]
// console.log(desktopItems[1])
// desktopItems.push("Infinity Gauntlet")
// for(let i = 0; i < desktopItems.length; i++){
//     console.log(desktopItems[i])
// }

// // Magic Number

// let magicNumber = Math.floor(Math.random() * 101)
// let guess = 0
// while(guess != magicNumber){
//     guess = prompt("Enter your new guess")
//     console.log(`Your guess was ${guess}`)
//     if(guess < magicNumber){
//         console.log("Too Low!")
//     }
//     if(guess > magicNumber){
//         console.log("Too High!")
//     }
//     if(guess == magicNumber){
//         console.log(`The magic number was ${magicNumber}.  Congrats, you guessed the number!!`)
//         break
//     }
//     if(Math.abs(guess - magicNumber) <= 10){
//         console.log("Getting warmer!")
//     }
// }

// Reverse a string
// a. Write code that takes a string as input and returns the string reversed
// b. i.e. “Hello” will be returned as “olleH”

// First of all, since I have already solved these problems previously, I am going back to my old repo 
// to see how to translate them from python into JS
// To solve this problem, I would create an empty string to be returned @ the end of the function
// I would then go through the string passed into the function using a for loop starting at the end of
// stringPassedIn (ie stringPassedIn.length - 1) and push that into the string that will be returned then decrement
// the index until the index >= 0
function reverseString(stringPassedIn){
    let returnString = ""
    for(let i = stringPassedIn.length - 1; i >= 0; i--){
        returnString += stringPassedIn[i]
    }
    return returnString
}

// test
let thisString = "Hello I am wakka wakka"
console.log(reverseString(thisString))

// Capitalize letter
//    a. Write code that takes a string as input and capitalize the first letter of each word. 
//        Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”

// To solve this problem, I would split the string at the space character, then I can loop through each substring and capitalize
// the first letter of each word.  finally, i can recombine the substrings back into the normal string and return that
function titleCase(stringPassedIn){
    stringPassedIn = stringPassedIn.toLowerCase().split(' ')
    for(let i = 0; i < stringPassedIn.length; i++){
        stringPassedIn[i] = stringPassedIn[i].charAt(0).toUpperCase() + stringPassedIn[i].slice(1)
    }
    return stringPassedIn.join(' ')
}

//test
let exampleString = "Hello, i am a sTRing"
console.log(titleCase(exampleString))