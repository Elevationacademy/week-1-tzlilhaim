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

if(p1.age === p2.age){
    if(p1.city === p2.city){
        console.log("Jill wanted to date Robert")
    } else{
        console.log("Jill wanted to date Robert, but couldn't")
    }
}