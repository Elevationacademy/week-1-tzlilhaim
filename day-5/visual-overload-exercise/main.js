// Get requested amount of boxes from user
let boxesCount = prompt("How many boxes would you like to play with? (10 MAX)")

// Limit amount to 10 boxes
if (boxesCount > 10) {
    boxesCount = 10
}


/*  */

// Change background color randomally
const genBoxColor = {
    colorsList: ["rgb(153, 51, 51)", "rgb(204, 102, 153)",
        "rgb(102, 102, 153)", "rgb(255, 204, 204)",
        "rgb(255, 206, 153)", "rgb(77, 26, 0)",
        "rgb(255, 245, 204)", "rgb(187, 187, 119)",
        "rgb(51, 51, 0)", "rgb(179, 107, 0)"],
    randomize: function (currentColor) {
        let newColor = this.colorsList[Math.floor(Math.random() * (this.colorsList.length - 1))]

        // If the new color is the same as current, randomize again
        while (currentColor == newColor) {
            newColor = this.colorsList[Math.floor(Math.random() * (this.colorsList.length - 1))]
        }
        return newColor
    }
}

// Create boxes dynamically
for (i = 0; i < boxesCount; i++) {
    let newBox = document.createElement("div")
    newBox.setAttribute("class", "boxes")
    newBox.setAttribute("id", "box-" + (i + 1))

    // Append to container
    const container = document.getElementById("container")
    container.appendChild(newBox)

    // Add function invoke on onmouseenter event
    newBox.onmouseenter = function () {

        // Get a different random color from function
        let currentColor = newBox.style.getPropertyValue("background-color") || 0
        let newColor = genBoxColor.randomize(currentColor)

        // Override box style - background color
        newBox.style.backgroundColor = newColor
    }
}