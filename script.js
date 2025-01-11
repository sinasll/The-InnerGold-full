// List of 6 generated confirmation codes
const validCodes = ['DASF4X', 'XAFAR4', 'SINA00', 'ESAM98', 'M3N4O5', 'P6Q7R8'];

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