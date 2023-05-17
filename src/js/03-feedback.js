import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const textArea = document.querySelector('textarea')
const email = document.querySelector('input')
const dataForm = {
    email: '',
    message: ''
}

form.addEventListener('click', throttle(onFillInputs, 500))
form.addEventListener('submit', onFormSubmit)

const returnData = JSON.parse(localStorage.getItem('feedback-form-state')) || '';

returnFieldValue()

function onFillInputs(event) {
   
    const email = event.currentTarget.elements.email.value
    const message = event.currentTarget.elements.message.value
   
    dataForm.email = email;
    dataForm.message = message
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForm))
}


function returnFieldValue() {
    if (returnData) {
        textArea.value = returnData.message;
        email.value = returnData.email
    }
}

function onFormSubmit(event) {
    event.preventDefault()

 if (email.value === "" || textArea.value === "") {
        alert('Pleas fill in all required fields')
        return
    }

    form.reset()
    localStorage.removeItem("feedback-form-state")
}

