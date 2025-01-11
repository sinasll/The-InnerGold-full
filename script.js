// List of 6 generated confirmation codes
const validCodes = ['SINA', 'XAFAR4', 'G7H8I9', 'J0K1L2', 'M3N4O5', 'P6Q7R8'];

document.getElementById('codeForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const enteredCode = document.getElementById('confirmationCode').value.toUpperCase();

  if (validCodes.includes(enteredCode)) {
    alert('Code accepted! You are one of us.');
    window.location.href = 'main.html';  
  } else {
    alert('Invalid code. You are not one of us.');
  }
});