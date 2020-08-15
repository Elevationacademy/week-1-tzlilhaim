// Reservations System

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

// Input element
const inputResName = document.getElementById("name-input")

const inputErrHandling = {
    alert: function (givenInput) {

        // Add alerted appearance to input
        inputResName.classList.add("nameInputErr")

        // Display error message label
        const errMsgLabel = document.getElementById("nameInputErrMsg")
        errMsgLabel.style.display = "block"

        // Check input and set text according to invalid use case
        if (givenInput == "") {
            errMsgLabel.innerHTML = "* Please provide a name"
        } else {
            errMsgLabel.innerHTML = "* Must use English letters only"
        }
    },
    remove: function () {

        // If error handling is displayed -
        // Remove error appearance from input
        if (inputResName.classList.contains("nameInputErr")) {
            inputResName.classList.remove("nameInputErr")
        }

        // Hide error message label
        const errMsg = document.getElementById("nameInputErrMsg")
        if (errMsg.style.display !== "none") {

            errMsg.style.display = "none"
        }
    }
}

// Dynamically set function to be invoked on events
inputResName.setAttribute("onchange", "inputErrHandling.remove()")

// Button element
const btnResCheck = document.getElementById("check-btn")
const btnClick =
    function () {

        // Get input value upon button click
        const inputValue = inputResName.value

        // Search reservation if input valid, alert if invalid

        if (!RegExp(/^[a-zA-Z\s]+$/).test(inputValue)) {
            inputErrHandling.alert(inputValue)
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

            // Empty the input field's value
            inputResName.value = ""
        }
    }

// Dynamically set functions to be invoked on events
btnResCheck.setAttribute("onclick", "btnClick()")