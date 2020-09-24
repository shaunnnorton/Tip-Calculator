const display = document.querySelector("#tip_amount")
const billInput = document.querySelector("#bill")
const tipInput = document.querySelector("#tip")
const peopleInput = document.querySelector("#people")
const total = document.querySelector('#total')
const buttons = document.getElementsByClassName('button')
function calculateTip() {
    const billValue = format_value('remove',billInput,'')
    const tipValue = format_value('remove',tipInput,'')
    const peopleValue = format_value('remove',peopleInput,'')
    const tipAmount = (billValue * tipValue / 100)/peopleValue
    display.innerText = `$${tipAmount.toFixed(2)}`
    total.innerHTML = `$${((billValue * tipValue / 100) + parseFloat(billValue)).toFixed(2)}`
    format_value('add',billInput,"$")
    format_value('add',tipInput,"%")
}
function changeValue(value,toChange){
    if(toChange == 'bill'){
        //console.log(value)
        billInput.value = parseFloat(format_value('remove',billInput,""))+parseFloat(value)
    }
    if(toChange == 'tip'){
        //console.log(value)
        tipInput.value = parseFloat(tipInput.value)+parseFloat(value)
    }
    if(toChange == 'people'){
        //console.log(value)
        peopleInput.value = parseFloat(peopleInput.value)+parseFloat(value)
    }
    calculateTip()

}

function format_value(perform,item,symbol){
    let newvalue =  ''
    if(perform === 'remove'){
        for(let i = 0;i<item.value.length;i++){
            if('1234567890.'.includes(item.value[i])){
                newvalue+=item.value[i]
                
            }
        }
        return newvalue
    }
    else if(perform === 'add') { 
        for(let i = 0;i<item.value.length;i++){
            if(symbol.includes(item.value[i])){
                item.value = item.value.replace(symbol,'') 
                //console.log(item.value)
            }
        }
        if(symbol == '%'){item.value = `${item.value}${symbol}`}
        if(symbol == '$'){item.value = `${symbol}${parseFloat(item.value).toFixed(2)}`}
        
    }

}

for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(e){changeValue(e.target.dataset.change,e.target.dataset.value)})

}

billInput.addEventListener('change', calculateTip)
tipInput.addEventListener('change', calculateTip)
peopleInput.addEventListener('input',calculateTip)

calculateTip()