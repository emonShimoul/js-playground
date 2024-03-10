
document.getElementById('btn-deposit').addEventListener('click', () => {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number !!');
        return;
    }

    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
});