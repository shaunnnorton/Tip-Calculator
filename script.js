const display = document.querySelector("#tip_amount")
const billInput = document.querySelector("#bill")
const tipInput = document.querySelector("#tip")
const peopleInput = document.querySelector("#people")
const total = document.querySelector('#total')
const buttons = document.getElementsByClassName('button')
function calculateTip() {
    const billValue = billInput.value.replace('$','')
    const tipValue = tipInput.value
    const peopleValue = peopleInput.value

    const tipAmount = (billValue * tipValue / 100)/peopleValue

    display.innerText = `$${tipAmount.toFixed(2)}`
    total.innerHTML = `$${((billValue * tipValue / 100) + parseInt(billValue)).toFixed(2)}`

}
function changeValue(value,toChange){
    if(toChange == 'bill'){
        console.log(value)
        billInput.value = parseInt(billInput.value)+parseInt(value)
    }
    if(toChange == 'tip'){
        console.log(value)
        tipInput.value = parseInt(tipInput.value)+parseInt(value)
    }
    if(toChange == 'people'){
        console.log(value)
        peopleInput.value = parseInt(peopleInput.value)+parseInt(value)
    }
    calculateTip()

}

for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(e){changeValue(e.target.dataset.change,e.target.dataset.value)})

}
//buttons[0].addEventListener('click',function(e){changeValue(e.target.dataset.change,e.target.dataset.value)})

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input',calculateTip)

calculateTip()