const fullname = document.querySelector('#fullname');
const cardNumber = document.querySelector('#cardNumber');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cvc = document.querySelector('#cvc');
const form = document.querySelector('#addCard');
const cardname = document.querySelector('#cardname');
const cardnumber = document.querySelector('#cardnumber');
const cardmonth = document.querySelector('#cardmonth');
const cardyear = document.querySelector('#cardyear');
const cardcvc = document.querySelector('#cardcvc');
const approved = document.querySelector('#approved');
const button = document.querySelector('#submit');


//mirrow display
document.getElementById('cardNumber').onkeyup = function(){
    document.getElementById('mirrowNumber').value = this.value;
};
document.getElementById('fullname').onkeyup = function(){
    document.getElementById('mirrowName').value = this.value;
};
document.getElementById('month').onkeyup = function(){
    document.getElementById('mirrowMonth').value = this.value;
};
document.getElementById('year').onkeyup = function(){
    document.getElementById('mirrowYear').value = this.value;
};
document.getElementById('cvc').onkeyup = function(){
    document.getElementById('mirrowCvc').value = this.value;
};

form.addEventListener('submit', function(e){
    e.preventDefault();

    // validate forms
    let isFullNameValid = checkFullname(),
    isCardNumberValid = checkCardNumber(),
        isMonthValid = checkMonth(),
        isYearValid = checkYear(),
        isCvcValid = checkCvc();

    let isFormValid = isFullNameValid &&
    isCardNumberValid &&
    isMonthValid &&
    isYearValid && 
    isCvcValid;

        // submit to the server if the form is valid
    if (isFormValid) {
        fullname.style.visibility = 'hidden';
        cardNumber.style.visibility = 'hidden';
        month.style.visibility = 'hidden';
        year.style.visibility = 'hidden';
        cvc.style.visibility = 'hidden';
        cardname.style.visibility ='hidden';
        cardnumber.style.visibility ='hidden';
        cardmonth.style.visibility ='hidden';
        cardyear.style.visibility ='hidden';
        cardcvc.style.visibility ='hidden';
        approved.style.visibility = 'visible';
//Button text change
document.getElementById('submit').textContent = "Continue";

    }
});




const isRequired = value => value === '' ? false:true;

const isBetween=(length, min, max) => length < min || length > max ? false : true;
// check full name
const isFullNameValid = (fullname) =>{
    const re =  /^[a-zA-Z]+ [a-zA-Z]+$/;
    return re.test(fullname);
};
//check card Number
const isCardNumberValid = (cardNumber) =>{
// const re = /^(\d+ )*(\d+)$/;
const re = /^(\d{4}[- ]){3}\d{4}$/;
return re.test(cardNumber);
};
//check month
const isMonthValid = (month) =>{
    const re =  /^0[1-9]|1[0-2]$/;
    return re.test(month);
};
//check Year
const isYearValid = (year) =>{
    //Years from 1000 to 2999
    // const re = /^[12][0-9]{3}$/;
    const re =  /^0[1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9]$/;
    return re.test(year);
};
//check CVC
const isCvcValid = (cvc) =>{
    const re = /^[0-9]{3}$/;
    return re.test(cvc);
};


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('div');
    error.textContent = message;
    // //show error Icon
    // const errorIcon = formField.querySelector('img');
    // errorIcon.style.visibility= 'visible';
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('div');
    error.textContent = '';
    // //Hide error Icon
    // const errorIcon = formField.querySelector('img');
    // errorIcon.style.visibility= 'hidden';
};

const checkFullname = () => {
    let valid = false;
    const fullNameEl = fullname.value.trim();
    if (!isRequired(fullNameEl)) {
        showError(fullname, 'Cannot be blank.');
    } else if (!isFullNameValid(fullNameEl)) {
        showError(fullname, 'wrong format');
    } else {
        showSuccess(fullname);
        valid = true;
    }
    return valid;
};

const checkCardNumber = () => {

    let valid = false;
    const cardNumberEL = cardNumber.value.trim();

    if (!isRequired(cardNumberEL)) {
        showError(cardNumber, 'Cannot be blank.');
      } 
      else if (!isCardNumberValid(cardNumberEL)) {
        showError(cardNumber, 'Invalid format');
    }
    else {
        showSuccess(cardNumber);
        valid = true;
    }
    return valid;
};

const checkMonth = () => {

    let valid = false;
    const monthEL = month.value.trim();

    if (!isRequired(monthEL)) {
        showError(month, 'Cannot be blank.');
     } 
     else if (!isMonthValid(monthEL)) {
        showError(month, 'Invalid format');
    }
    else {
        showSuccess(month);
        valid = true;
    }
    return valid;
};

const checkYear = () => {

    let valid = false;
    const yearEL = year.value.trim();

    if (!isRequired(yearEL)) {
        showError(year, 'Cannot be blank.');
    }  else if (!isYearValid(yearEL)) {
        showError(year, 'Invalid format');
    }
    else {
        showSuccess(year);
        valid = true;
    }
    return valid;
};
//check CVC
const checkCvc = () => {

    let valid = false;
    const cvcEL = cvc.value.trim();

    if (!isRequired(cvcEL)) {
        showError(cvc, 'Cannot be blank.');
    }  else if (!isCvcValid(cvcEL)) {
        showError(cvc, 'Invalid format');
    }
    else {
        showSuccess(cvc);
        valid = true;
    }
    return valid;
};