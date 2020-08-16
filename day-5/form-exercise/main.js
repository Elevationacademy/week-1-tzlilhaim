// Error Handling
const errMsg = document.getElementById("err-msg")

const errHandling = {
    shownError: {
        isShown: false,
        fieldId: 0
    },
    removeError: function (inputField) {

        // Remove error appearance from field and hide icon
        inputField.classList.remove("input-error")
        document.getElementById(inputField.id + "-container").
            getElementsByClassName("failure-icon")[0].style.display = "none"

        // Hide error message
        errMsg.style.display = "none"

        // Remove onchange event listner
        inputField.removeAttribute("onchange")

        // Update shown error obejct accordingly
        this.shownError.isShown = false
        this.shownError.fieldId = 0

    },
    showErrMsg: function (userInput, fieldId) {

        // Check if error displays on an input yet
        if (this.shownError.isShown) {

            // Remove from other input before adding to this one
            if (this.shownError.fieldId !== fieldId) {
                this.removeError(document.getElementById(this.shownError.fieldId))
            } else {

                // If it displays on this input already, do nothing
                return
            }
        }

        // Add error appearance to input and error icon
        document.getElementById(fieldId).classList.add("input-error")
        document.getElementById(fieldId + "-container").
            getElementsByClassName("failure-icon")[0].style.display = "inline-block"

        // If no error is displayed yet, show message according to input and value
        if (userInput == "") {
            errMsg.innerHTML = fieldId + " is missing."
        } else {
            if (fieldId == "name") {
                errMsg.innerHTML = "name must be 2 English letters"
            } else if (fieldId == "salary") {
                errMsg.innerHTML = "salary must be a number between 10K - 16K"
            } else if (fieldId == "birthday") {
                errMsg.innerHTML = "invalid birthday"
            } else if (fieldId == "phone") {
                errMsg.innerHTML = "phone must be 10 digits"
            }
        }

        // Show error message and update shown error object accordingly
        errMsg.style.display = "inline-block"
        this.shownError.isShown = true
        this.shownError.fieldId = fieldId

        // Add listner to remove the error on this input's change
        document.getElementById(fieldId).setAttribute("onchange", "errHandling.removeError(this)")
    }
}

const successHandling = {
    showningSuccessOn: [],
    showSuccess: function (fieldId) {

        // If success displays already on this input, do nothing
        if (this.showningSuccessOn.includes(fieldId)) {
            return
        } else {

            // If not, show icon and success appearance for this input
            document.getElementById(fieldId + "-container").
                getElementsByClassName("success-icon")[0].style.display = "inline-block"
            document.getElementById(fieldId).classList.add("input-success")

            // Add to showing success arr
            this.showningSuccessOn.push(fieldId)

            // Add listner to remove the success on this input's change
            document.getElementById(fieldId).setAttribute("onchange", "successHandling.removeSuccess(this)")
        }
    },
    removeSuccess: function (inputField) {

        // Hide success icon and class
        document.getElementById(inputField.id + "-container").
            getElementsByClassName("success-icon")[0].style.display = "none"
        document.getElementById(inputField.id).classList.remove("input-success")

        // Remove from showing success arr
        this.showningSuccessOn.remove(indexOf(inputField.id))

        // Remove from showing success arr
        inputField.removeAttribute("onchange")
    }
}

const checkInput = {
    regex: {
        name: /^[A-Za-z]{2}$/, salary: /^(1[0-5][0-9]{3}|16000)$/,
        birthday: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, phone: /^\d{10}$/
    },
    validate: function (inputField) {

        let isValid
        if (RegExp(this.regex["", inputField.id]).test(inputField.value)) {
            isValid = true
        } else {
            isValid = false
            errHandling.showErrMsg(inputField.value, inputField.id)
        }
        return isValid
    }
}

const submitForm = function () {
    const userName = document.getElementById("name").value
    alert("Hey " + userName + "! Your form was submitted sucessfully :)")
}

const validate = function () {

    const formFields = [
        { id: "name", isValid: false },
        { id: "salary", isValid: false },
        { id: "birthday", isValid: false },
        { id: "phone", isValid: false }]

    for (i = 0; i < formFields.length;) {

        // Check if field is valid
        formFields[i].isValid =
            checkInput.validate(document.getElementById(formFields[i].id))

        if (formFields[i].isValid) {
            successHandling.showSuccess(formFields[i].id)
            i++

        } else {
            return
        }
    }
    
    // As long as all are valid and all were checked, submit form
    let isAllValid = true
    i = 0
    while (isAllValid && i < formFields.length) {
        isAllValid = formFields[i].isValid
        i++
    }
    if (isAllValid) {
        submitForm()
    }

}