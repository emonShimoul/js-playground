function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';

    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);

    return elementValue;
}

document.getElementById('btn-deposit').addEventListener('click', () => {
    const newDepositAmount = getInputFieldValueById('deposit-field');
});