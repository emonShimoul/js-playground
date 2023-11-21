
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const previousCaseNumber = parseInt(caseNumberField.value);
    
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    } else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

document.getElementById('btn-case-plus').addEventListener('click', () => {
    const newCaseNumber = updateCaseNumber(true);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
});

document.getElementById('btn-case-minus').addEventListener('click', () => {
    updateCaseNumber(false);
});

