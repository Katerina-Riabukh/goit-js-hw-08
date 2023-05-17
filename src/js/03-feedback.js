import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const textArea = document.querySelector('textarea')
const input = document.querySelector('input')

form.addEventListener('input', throttle(onFillInputs, 500))
form.addEventListener('submit', onFormSubmit)

const returnData = JSON.parse(localStorage.getItem('feedback-form-state')) || '';

returnFieldValue()

function onFillInputs(event) {
   
    const email = input.value;
    const message = textArea.value
    let dataForm = {}
    dataForm.email = email;
    dataForm.message = message
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForm))
}

function returnFieldValue() {
    if (returnData) {
        textArea.value = returnData.message;
        input.value = returnData.email
    }
}

function onFormSubmit(event) {
    event.preventDefault()

    console.log({ email: input.value, message: textArea.value });
 if (input.value === "" || textArea.value === "") {
        alert('Pleas fill in all required fields')
        return
    }

    form.reset()
    localStorage.removeItem("feedback-form-state")
}
