/*
// ----------------- Learn -----------------
// 02 Arrays
let myStuff = ["laptop","flute","piano"]
console.log(myStuff[1])

// 03 Variables From Arrays
const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
console.log("The first plant is "+plants[0]+". The last plant is "+plants[plants.length-1])

//04  Updating and dding to Arrays
// Using the same definition and assignment from 02
 let lastItem = myStuff[myStuff.length-1]
let firstItem = myStuff[0]

myStuff.unshift(lastItem) // Add last item to the beginning
myStuff.push(firstItem) // Add first item to the end

console.log(myStuff)

 // Spread sytnax
 myStuff.push(...myStuff)
 console.log(myStuff)
 */

 // ----------------- Apply -----------------

 // 01 Array Exercises
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let newGenes = genes; // Create new strand of genes based on genes
// console.log(newGenes)

// Capture the index of the genes that need to swap places
let indexRLF = newGenes.indexOf("RLF")
let indexCRYZ = newGenes.indexOf("CRYZ")

newGenes[indexRLF] = "CRYZ" // Change value at index
newGenes[indexCRYZ] = "RLF" // Change value at index
// console.log(newGenes)

// Capture the index of gene AZIN2
let indexAZIN2 = newGenes.indexOf("AZIN2")
newGenes.splice(indexAZIN2, 1) // Remove this item at index
newGenes.push("AZIN2","AZIN2") // Add these itmes to end
// console.log(newGenes)

// Add gene FXT to begining of strand
newGenes.unshift("FXT")
// console.log(newGenes)

