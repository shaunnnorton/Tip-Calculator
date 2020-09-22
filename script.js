const display = document.querySelector("#display")
const billInput = document.querySelector("#bill")
const tipInput = document.querySelector("#tip")

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value

    const tipAmount = billValue * tipValue / 100

    display.innerHTML = tipAmount.toFixed(2)
}

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)

calculateTip()