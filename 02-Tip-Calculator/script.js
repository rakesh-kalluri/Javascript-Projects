const btnEl = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalEl = document.getElementById('total');

function calculateTotal() {
  const billAmount = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipInput.value);

  if (
    isNaN(billAmount) ||
    isNaN(tipPercentage) ||
    billAmount <= 0 ||
    tipPercentage < 0
  ) {
    alert('Please enter valid numbers for bill amount and tip percentage.');
    return;
  }
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;
  totalEl.innerText = totalAmount.toFixed(2);
}

btnEl.addEventListener('click', calculateTotal);
