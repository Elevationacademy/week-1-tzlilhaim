// ------------------- Learn -------------------
// 02 Invoking Functions
const tellAJoke = function () {
    let joke = "Two ducks are sitting at a riverbank. One says: 'Quack'. The 2nd one says: 'Quack Quack'. A 3rd duck suddenly appears, takes out a gun and shots the 2nd duck. The 1st duck looks at the 3rd with horror and asks: 'Why did you do that?!' so the 3rd one replies: 'It knew too much...'"
    console.log(joke)
}
tellAJoke()

// 10 Spot Check
const person = {
    name: "Julius",
    speak: function (food) {
        console.log("I like " + food)
    }
}
person.speak("cheescake")

// ------------------- Apply -------------------
// Exercise 1
calcAge = function (yearOfCheck, yearOfBirth) {
    let ageInYearOfCheck = yearOfCheck - yearOfBirth
    return ageInYearOfCheck
}

const age = calcAge(2017, 1989)

// Exercise 2
const calPossibleAgeOptions = function (yearOfCheck, yearOfBirth) {
    let possibleAge1 = yearOfCheck - yearOfBirth
    let possibleAge2 = yearOfCheck - yearOfBirth - 1
    return [possibleAge1, possibleAge2]
}

let possibleAgeRes = calPossibleAgeOptions(2018, 2015)
console.log("You are either " + possibleAgeRes[0] + " or " + possibleAgeRes[1])

// Exercise 3
const isEven = function (number) {
    return !(number % 2)
}

let isEvenRes = isEven(800)
console.log(isEvenRes)

// Exercise 4
const printOddNumbers = function (numbersArr) {
    for (n of numbersArr) {
        if (!(isEven(n))) {
            console.log(n + " is an odd number")
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1718, 19, 20]
printOddNumbers(numbers)

// Exercise 5
const checkExists = function (numsArr, num) {
    for (n of numsArr) {
        if (n === num) {
            return true
        }
    }
    return false
}

let x = checkExists([1, 2, 3], 2)
let y = checkExists([4, 5, 6], 2)

// Exercise 6
calculator = {
    add: function (x, y) {
        return x + y
    },
    subtract: function (x, y) { return x - y }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

// Exercise 7
const increaseByNameLength = function (money, name) { return name.length * money }
const makeRegal = function (name) { return "His Royal Highness, " + name }

const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

// Exetension - Splice Challenge
// Splice - overriding the original method
const splice = function (givenArr, arrIndex, deleteCount = 0, ...arguments) {
    let arrSlicedEnd = []
    let arrSlicedStart = []
    let insertArr = []
    let insertCount = arguments.length
    let deletedElement
    let arrDeletedSlice = []

    // Insert - Getting the insert array
    if (insertCount) {
        insertArr = arguments
    }

    // Getting the items before the index that should be kept 
    if (arrIndex) {

        // Delete or insert
        if (deleteCount) {

            // Get deleted element in case of 1 element
            if (deleteCount == 1) {
                deletedElement = givenArr.slice(arrIndex, arrIndex + 1)
            }

            // Getting the items after delete into new array
            arrSlicedEnd = givenArr.slice(arrIndex + 1, givenArr.length)

            // Remove relevant items from end
            for (i = arrIndex; i < givenArr.length;) {
                givenArr.pop()
            }

            // Add inserts at start if should
            if (insertCount) {

                // Add inserts array at the end
                givenArr.push(...insertArr)
            }

            // Add sliced end back to the end of the array
            givenArr.push(...arrSlicedEnd)

        } else {
            if (insertCount) {
                arrSlicedEnd = givenArr.slice(arrIndex, givenArr.length)
                givenArr.push(...arrSlicedEnd)

            } else {
                arrDeletedSlice = givenArr.slice(arrIndex, givenArr.length)
                for (i = arrIndex; i < givenArr.length;) {
                    givenArr.pop()
                }

                // Print deleted elements if how many wasn't specified
                return arrDeletedSlice
            }
        }

        // Return delete element if 1 was given as how many
        if (deleteCount == 1) {
            return deletedElement
        }
    } else {
        if (deleteCount) {
            for (i = 0; i < deleteCount; i++) {
                givenArr.shift()
            }
        } else {

            // Add inserts at start if should
            if (insertCount) {

                // Remove relevant items from start
                if (arrIndex < insertCount) {
                    givenArr.unshift(...insertArr)
                }

                givenArr.unshift(...arrSlicedStart)
            }
        }
    }

    // Return deleted elements array if none deleted
    return arrDeletedSlice
}

// TESTS
console.group("Test Results:")

// remove 1 element
let arr = [1, 2, 3]
splice(arr, 0, 1)
console.log(arr)

// add 1 element
arr = [1, 2, 3]
splice(arr, 0, 0, 0)
console.log(arr)


// add 2 elements
arr = [1, 2, 3]
splice(arr, 0, 0, -1, 0)
console.log(arr)


// replace 1 element
arr = [1, 2, 3]
splice(arr, 1, 1, 55)
console.log(arr)


// delete all elements from index to end
arr = [1, 2, 3, 4, 5]
splice(arr, 1)
console.log(arr)


// returns array of deleted elements
arr = [1, 2, 3]
let deleted = splice(arr, 1)
console.log(deleted);


// returns an array of the deleted element (1 element)
arr = [1, 2, 3]
deleted = splice(arr, 1, 1)
console.log(deleted);


// returns an empty array when no elements are deleted
arr = [1, 2, 3]
deleted = splice(arr, 1, 0, 5)
console.log(deleted)
console.groupEnd()