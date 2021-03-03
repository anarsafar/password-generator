const inputField = document.querySelector('input[type="text"]')
const passwordLength = document.querySelector('input[type="number"]')
const generateButton = document.querySelector('button')
const include_numbers = document.getElementById('numbers')
const include_lowercase = document.getElementById('lowercase')
const include_uppercase = document.getElementById('uppercase')
const include_symbols = document.getElementById('symbols')
const clipboard = document.querySelector('.fas')

//get password length
function passLength() {
    return passwordLength.value
}

//get copy of  password
clipboard.addEventListener('click', () => {
    var copyPassword = inputField
    if (copyPassword.value.length > 0) {
        copyPassword.select()
        document.execCommand('copy')
        alert('Password copied to clipboard')
    }
})


function includeNumbers() {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let random = Math.floor(Math.random() * array.length)
    if (include_numbers.checked) { return array[random] } else {
        return ''
    }
}

function includeLowercase() {
    let array = []
    for (let i = 97; i <= 122; i++) {
        array.push(String.fromCharCode(i))
    }
    let random = Math.floor(Math.random() * array.length)
    if (include_lowercase.checked) { return array[random] } else {
        return ''
    }
}

function includeUppercase() {
    let array = []
    for (let i = 65; i <= 90; i++) {
        array.push(String.fromCharCode(i))
    }
    let random = Math.floor(Math.random() * array.length)
    if (include_uppercase.checked) { return array[random] } else {
        return ''
    }
}

function includeSymbols() {
    let array = []
    for (let i = 33; i <= 47; i++) {
        array.push(String.fromCharCode(i))
    }
    let random = Math.floor(Math.random() * array.length)
    if (include_symbols.checked) { return array[random] } else {
        return ''
    }
}

//generate password
generateButton.addEventListener('click', (e) => {
    let password = ''
    for (let i = 0; i < passLength(); i++) {
        password += includeNumbers() + includeSymbols() + includeUppercase() + includeLowercase()
    }
    inputField.value = password.slice(0, passLength())
    e.preventDefault()
})