// exercise 1
let numChildren = prompt("How many chiildren do you have?")
let isCareful = prompt("Are you careful?")
if (isCareful == false || isCareful === "no") {
    numChildren = numChildren - 1
    console.log(numChildren)
} else {
    console.log("keep up the good work")
}

// exercise 2
let silverwareCount = prompt("give amount")

if (silverwareCount % 2) {
    console.log("something's missing")
} else {
    console.log("great")

}

// exercise 3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

//performance = prompt("change performance");

if(performance === "stellar"){
    salary += stellarBonus
    console.log("You've received a stellar bonus! Current amount: "+ salary);
} else{
    salary += goodBonus
    console.log("You've received a good bonus! Current amount: "+ salary);
}

// exercise 4
const isVIP = false
let cash = 500

//cash = prompt("How much cash are you carrying right now?")

if(isVIP || cash > 300){
    console.log("you can enter the club")
} else{
    console.log("you cannot enter the club!")
}

// exercise 5
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}
d = a + (b * c)

d++
b += 2
console.log("a is "+a, "b is "+b, "c is "+c, "d is "+d)

//exercise 6
const gender = null
let profession = "business"

if(gender == null){
    let genderInput = prompt("No gender was specified. Please provide a gender")
    if(genderInput == "man" || genderInput == "woman"){
        profession = profession+genderInput
    console.log("user said gender is: "+genderInput+". Therefore, the preofession is: "+profession)
    } else{
        console.log("invalid gender: "+genderInput)
    }
} else{
    profession = profession+gender
    conssole.log(profession)
}

// exercise 7
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla) {
    if (isUSCitizen) {
        let yearsSincePurchase = currentYear - yearOfTeslaPurchase
        if (yearsSincePurchase > 4 || yearsSincePurchase == 4) {
            console.log("You previously bought a Tesla car " + yearsSincePurchase + " years ago. Would you like an upgrade?")
        } else {
            console.log("Ypu previously bought a Tesla car " + yearsSincePurchase + " years ago. Are you satisfied with the car?")
        }
    } else {
        console.log("Would you like to move to the US?")
    }
} else {
    console.log("Are you interested in buying a Tesla car?")
}