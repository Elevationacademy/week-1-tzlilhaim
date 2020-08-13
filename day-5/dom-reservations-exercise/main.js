// Reservations System

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

// Input element
const inputResName = document.getElementById("name-input")
const inputInteractions = {
    alrtedEnd: function (){

        // Remove class to element to return to default style
        inputResName.classList.remove("nameInputAlerted")
    },
    hoverEnd:
        function () {

            // Remove class to element to return to default style
            inputResName.classList.remove("nameInputHovered")
        },
    hover: function () {
         // Add class to element to change style state
         inputResName.classList.add("nameInputHovered")
    },
    focus:
        function () {

            // if the field is alerted, remove it upon focus
            if (inputResName.classList.contains("nameInputAlerted")) {
                inputInteractions.alrtedEnd()
            }

            // Add class to element to change style state
            inputResName.classList.add("nameInputFocused")
        },
    focusEnd:
        function () {

            // Remove class to element to return to default style
            inputResName.classList.remove("nameInputFocused")
        }
}

// Dynamically set functions on events
inputResName.setAttribute("onfocus", "inputInteractions.focus()")
inputResName.setAttribute("onblur", "inputInteractions.focusEnd()")
inputResName.setAttribute("onmouseover", "inputInteractions.hover()")
inputResName.setAttribute("onmouseout", "inputInteractions.hoverEnd()")


// Button element
const btnResCheck = document.getElementById("check-btn")
const btnInteractions = {
    hoverEnd:
        function () {
            btnResCheck.classList.remove("checkBtnHovered")
        },
    hover:
        function () {
            btnResCheck.classList.add("checkBtnHovered")
        },
    click:
        function () {

            // Get input value if exists and alert if empty
            const inputValue = inputResName.value
            if (inputValue == "") {
                inputResName.classList.add("nameInputAlerted")
            } else {

                // Get all the names of 
                const reservationNames = Object.keys(reservations)
                let isReservationFound = false
                let isClaimed
                let resNameAsSaved

                // Check if reservation exists & claimed
                for (rName of reservationNames) {
                    if (inputValue.toLowerCase() === rName.toLowerCase()) {
                        isReservationFound = true
                        resNameAsSaved = rName
                        if (reservations[rName].claimed) {
                            isClaimed = true
                        } else {
                            isClaimed = false
                        }
                    }
                }

                // Print name check results into a paragraph
                const checkResultsContainer = document.getElementById("check-results-container")
                const nameCheckResult = document.createElement("p")

                if (isReservationFound) {
                    if (isClaimed) {
                        nameCheckResult.innerHTML = "Hmm, someone already claimed the reservation under " + "'" + inputValue + "'"
                    } else {
                        nameCheckResult.innerHTML = "Welcome, " + inputValue

                        // Change reservation's status to claimed
                        reservations[resNameAsSaved].claimed = true
                    }
                } else {
                    nameCheckResult.innerHTML = "You have no reservation, " + inputValue
                }
                checkResultsContainer.appendChild(nameCheckResult)
            }

            // Empty the input field's value
            inputResName.innerHTML = ""
        }
}

// Dynamically set functions on events
btnResCheck.setAttribute("onmouseover", "btnInteractions.hover()")
btnResCheck.setAttribute("onmouseout", "btnInteractions.hoverEnd()")
btnResCheck.setAttribute("onclick", "btnInteractions.click()")