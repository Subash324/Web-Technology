const username = document.getElementById('Username')
const email = document.getElementById('Email Address')
//const password = document.getElementById('password')
//const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (username.value === '' || username.value == null) {
        messages.push('Name is required')
    }

    if ((password.value.length <= 8) || (password.length >= 15)) {
        messages, push('Password must be between 8-15 characters.')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')

    }


})
