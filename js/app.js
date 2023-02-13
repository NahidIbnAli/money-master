function getInputValue(inputId){
    const element = document.getElementById(inputId);
    const elementValue = parseInt(element.value);
    return elementValue;
}

function setElementValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

document.getElementById('btn-calc').addEventListener('click', function(){
    const incomeAmount = getInputValue('income');
    const foodCost = getInputValue('food')
    const rentCost = getInputValue('rent')
    const clothesCost = getInputValue('clothes')
    if(isNaN(incomeAmount) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)){
        alert('Please provide a number');
        return;
    }
    const totalExpenses = foodCost + rentCost + clothesCost;
    setElementValue('total-expenses', totalExpenses);
    const balance = incomeAmount - totalExpenses;
    setElementValue('balance', balance);
})

document.getElementById('btn-saving').addEventListener('click', function(){
    const savingPercentage = getInputValue('saving-percentage');
    if(isNaN(savingPercentage)){
        alert('Please provide a number');
        return;
    }
    else if(savingPercentage > 100){
        alert('You cannot give percentage more than 100');
        return;
    }
    const incomeAmount = getInputValue('income');
    const savingAmount = (savingPercentage / 100) * incomeAmount;
    setElementValue('saving-amount', savingAmount);
    const balanceString = document.getElementById('balance');
    const balance = parseInt(balanceString.innerText);
    const remainingAmount = balance - savingAmount;
    setElementValue('remaining-balance', remainingAmount);
})