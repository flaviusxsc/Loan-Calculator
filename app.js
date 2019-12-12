// Listen for submit 

document.querySelector('#loan-form').addEventListener('submit',calculateResults);

// Calcultate Results function 
function calculateResults (e){
//UI variables 
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

//Compute the monthly payments
const x = Math.pow(1 + calculatedInterest,calculatedPayments);
const monthly = (principal * x * calculatedInterest)/(x -1);

if(isFinite(monthly)) {
monthlyPayment.value = monthly.toFixed(2);
totalPayment.value =(monthly * calculatedPayments).toFixed(2);
totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
}else{
showError('Please check your numbers!');
}
e.preventDefault();
}

//showError function

function showError(error){
//Create a div 
const errorDiv = document.createElement('div');

const card = document.querySelector('.card');
const heading = document.querySelector('.heading')

errorDiv.className = 'alert alert-danger';
errorDiv.appendChild(document.createTextNode(error))
//Insert Error above heading 
card.insertBefore(errorDiv,heading);
//Clear Error after 5 seconds

setTimeout(clearError,2000);

//Clear Error function 
function clearError(){
  document.querySelector('.alert').style.display='none';
}
}