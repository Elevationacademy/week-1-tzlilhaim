// ----------------------- Learn -----------------------
// 03 Spot Checks
// Spot Check 1
let car = {
    color: "Purple",
    numWheels: 4,
    isFancy: true
}

// Getting the fancy status as a string, not boolean
let fancyStatusText
if (car.isFancy) {
    fancyStatusText = "fancy"
} else {
    fancyStatusText = "not fancy"
}
// Print out the result
console.log("The " + car.color + " car has " + car.numWheels + " wheels. It is " + fancyStatusText)

// Spot Check 2
let kitchenItems = {
    item: "spoon",
    toBeginning: true,
    items: ["plate", "cloth", "fork", "salt shaker", "knife"]
}

// Move item to begining or end
if (kitchenItems.toBeginning) {
    kitchenItems.items.unshift(kitchenItems.item)
} else {
    kitchenItems.items.push(kitchenItems.item)
}
console.log(kitchenItems)

// 04 Dot Notation vs. Bracket Notation
const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"
human[babyNameKey] = babyNameValue
console.log(human)

// 05 Replacing Values
human.name = "Tzlil"
console.log(human)

// 06 Objects as Variables
// Spot Check 1
let apple = {
    color: "red",
    name: "apple"
}

let cheese = {
    color: "yellow",
    name: "cheese"
}

let foods = [apple, cheese]

// Print apple's color from foods array
let indexApple = foods.indexOf(apple)
console.log(foods[indexApple].color)

// Spot Check 2
const bag = {
    weight: 10,
    owner: "Larissa",
    items: [                   // an array with objects in it!
        { item: "Pen", count: 2 },
        { item: "Bottle", count: 1 },
        { item: "Book", count: 3 }
    ]
}

// Print the nane of the first item in the bag
console.log(bag.items[0].item)

// ----------------------- Apply -----------------------
// Exercise 1
let p1 = {
    name: "Robert",
    age: 30,
    city: "Montreal"
}
let p2 = {
    name: "Jill",
    age: 30,
    city: "New York"
}

if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        console.log("Jill wanted to date Robert")
    } else {
        console.log("Jill wanted to date Robert, but couldn't")
    }
}

// Exercise 2
let myList = [
    {
        piece: "Moonlight sonata",
        composer: "Ludwig Van Beethoven"
    },
    {
        piece: "Liebestrum",
        composer: "Franz Liszt"
    }
]

myList[0].title = "Pathetique sonata"
myList.splice(1, 1)

// Exercise 3
let mySecondList = [{
    title: "Our Mutual Friend",
    author: "Charles Dickens"
}, {
    title: "Persuasion",
    author: "Jane Austen"
}]

myList.push(...mySecondList)

// Exercise 4
library = {
    books: [
        { title: "Little House on the Prairie", author: "Little House on the Prairie" },
        { title: "Howl's Moving Castle", author: "Diana Wynne Jones" },
        { title: "Jane Eyre", author: "Charlotte Bronte" },
        { title: "Little Women", author: "Louisa May Alcott" }]
}

let booksArray = library.books
myList.push(...booksArray)

// Exercise 5
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation');

reservationNames = Object.keys(reservations)
let isReservationFound = false
let isClaimed

// Check if reservation exists & claimed
for (rName of reservationNames) {
    if (name.toLowerCase() === rName.toLowerCase()) {
        isReservationFound = true
        if (reservations[rName].claimed) {
            isClaimed = true
        } else {
            isClaimed = false
        }
    }
}

if (isReservationFound) {
    if (isClaimed) {
        alert("Hmm, someone already claimed this reservation")
    } else {
        alert("Welcome " + name + ", Here's your table!")
    }
} else if (name) {
    reservations[name] = { 'claimed': true }
    alert("Created a reservation for " + name)
}

// Extensions
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false,
    fridge: {
        price: 500,
        works: true,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

// Helper variables definition
const kitchenOwner = kitchen.owner
const hasOven = kitchen.hasOven
const isFridgeWorks = kitchen.fridge.works
const fridgeItems = kitchen.fridge.items
const fridgeItemObject = fridgeItems[1]
const fridgePrice = kitchen.fridge.price
let expiryDate
let expiryStatusMsg
let expiryReasoningMsg
let luckStatusMsg
let ovenExistStatusMsg
let fridgeWorkStatusMsg
let fridgeFixText

// Considering whether the oven works
if (hasOven) {
    ovenExistStatusMsg = "has an oven"
    luckStatusMsg = "Luckily,"
} else {
    ovenExistStatusMsg = "doesn't have an oven"
    luckStatusMsg = "Too bad"
}

// Considering the item's expiry and reasoning
let isItemExpired = date > fridgeItemObject.expiryDate
let expiredFor = date - fridgeItemObject.expiryDate

if (isItemExpired) {
    let dayOrdays
    if (expiredFor == 1) {
        dayOrdays = "day"
    } else {
        dayOrdays = "days"
    }
    expiryStatusMsg = "expired " + expiredFor + " " + dayOrdays + " ago."
    if (isFridgeWorks) {
        expiryReasoningMsg = "Weird, considering"
    } else {
        expiryReasoningMsg = "Probably because"
    }
} else {
    expiryStatusMsg = "is not expired."

    if (isFridgeWorks) {
        expiryReasoningMsg = "Probably because"
    } else {
        expiryReasoningMsg = "Weird, considering"
    }
}

// Considering whether the fridge works
if (isFridgeWorks) {
    fridgeWorkStatusMsg = "works"
} else {
    fridgeWorkStatusMsg = "doesn't work"
    fridgeFixText = "And she'll have to pay " + fridgePrice + " to fix the fridge."
}

// Assemble the result message by variables
let resMsg = kitchenOwner + "'s " +
    fridgeItemObject.name + " " +
    expiryStatusMsg + " " + expiryReasoningMsg + " " +
    "her fridge " + fridgeWorkStatusMsg + ". " +
    luckStatusMsg + " she " + ovenExistStatusMsg + " to cook the " +
    fridgeItemObject.name + " in."

if (!isFridgeWorks) {
    resMsg += " " + fridgeFixText
}

// Print the result message
console.log(resMsg)