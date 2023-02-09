const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign')
const equals = document.querySelector('.equals')
const exclui = document.querySelector('.exclui')
const cleare = document.getElementById('AC')
const negative = document.querySelector('.negative') 
const percent = document.querySelector('.persent')

let firstValue = '';
let isFirstValue = false;
let secondValue = '';
let isSecondValue = false;
let sign = '';
let resultValue = 0;

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let x = e.target.getAttribute('value')
        if (isFirstValue === false) {
            getFirstValue(x)
        }
        if (isSecondValue === false) {
            getSecontValue(x)
        }
    })
} 

function getFirstValue(el) {
    result.innerHTML = '';
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}
function getSecontValue(el) {
    if (firstValue != "" && sign != "") {
        secondValue += el
        result.innerHTML = secondValue 
        secondValue = +secondValue
    }
}
function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value')
            isFirstValue = true
        }
        )
    }
}
getSign()

equals.addEventListener('click', () => {
    result.innerHTML = ""
    if (sign === '+') {
        resultValue = firstValue + secondValue
    }
    else if (sign ==='-') {
        resultValue = firstValue - secondValue
    }
    else if (sign === 'x') {
        firstValue + 'x' && secondValue + 'x'
        resultValue = firstValue * secondValue
    }
    else if (sign === '/') {
        resultValue = firstValue / secondValue
    }
    result.innerHTML = resultValue
    firstValue = resultValue
    secondValue = ""

    checkResult()
})
function checkResult() {
    resultValue = JSON.stringify(resultValue)
    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue)
        result.innerHTML = resultValue.toFixed(5)
    }
}

percent.addEventListener('click', () => {
    result.innerHTML = ""
    if (firstValue != "") {
        resultValue = firstValue / 100
        firstValue = resultValue
    }
    if (firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue / 100
    }

    result.innerHTML = resultValue
})
cleare.addEventListener('click', () => {
    result.innerHTML = 0

    firstValue = '';
    isFirstValue = false;
    secondValue = '';
    isSecondValue = false;
    sign = '';
    resultValue = 0;

})
exclui.addEventListener('click', () => {
    if (result != 0) {
        result.textContent = result.textContent.slice(0, -1)
        firstValue = result.innerHTML 
    }
})
