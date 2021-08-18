function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('please try again for 4 digit', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-display').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-display');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber
    }
});

function getVerify() {
    const generatedPin = document.getElementById('pin-display').value;
    const typedNumbers = document.getElementById('type-display').value;
    const success = document.getElementById('success');
    const failed = document.getElementById('failed');
    if (generatedPin == typedNumbers) {

        success.style.display = 'block'
        failed.style.display = 'none'
    }
    else {
        success.style.display = 'none'

        failed.style.display = 'block'
    }
}

