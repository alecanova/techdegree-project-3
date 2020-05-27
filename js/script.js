// Setting focus on the first text field
document.getElementById('name').focus();


/************************************************
              * OTHER JOB ROLE *
************************************************/

// Selecting and hiding the elements just created in the HTML file.
const jobRole = document.getElementById('title');
const otherJobInput = document.getElementById('other-title');
const otherJobLabel = document.querySelectorAll('label')[3];

otherJobInput.hidden = true;
otherJobLabel.hidden = true;

//if the user selects 'other', the other job input will appear.
jobRole.addEventListener ('change', (e) => {
    
    if ( e.target.value === 'other') {

        otherJobInput.hidden = false;
        otherJobLabel.hidden = false;

    } else {

        otherJobInput.hidden = true;
        otherJobLabel.hidden = true;

    }

});

/************************************************
              * T-SHIRT SECTION *
************************************************/

// Selecting the T-shirt info elements.
const colorDiv = document.getElementById("colors-js-puns");
const colorSelect = document.getElementById('color');
const designSelect = document.getElementById('design');
const colorOptions = document.getElementById('color').options;
const designOptions = document.getElementById('design').options;
designOptions[0].hidden = true;
// Creating a new option in the color menu
const pleaseSelect = document.createElement('option');
pleaseSelect.value = '';
pleaseSelect.innerHTML = 'Please select a T-shirt theme';
colorSelect.insertBefore(pleaseSelect, colorOptions[0]);
colorOptions[0].selected = true;
// Initially hiding the color menu 
colorDiv.hidden = true; 

// When one of the two themes is selected, only the appropriate colors will appear in the menu.
designSelect.addEventListener('change', (e) => {
    colorDiv.hidden = false; 
    
    for(let i = 0; i < designOptions.length; i++) {

        if(e.target.value === 'js puns') {
            colorOptions[1].selected = true;

            colorOptions[0].hidden = true;
            colorOptions[1].hidden = false;
            colorOptions[2].hidden = false;
            colorOptions[3].hidden = false;
            colorOptions[4].hidden = true;
            colorOptions[5].hidden = true;
            colorOptions[6].hidden = true;

        } else if (e.target.value === 'heart js') {
            colorOptions[4].selected = true;

            colorOptions[0].hidden = true;
            colorOptions[1].hidden = true;
            colorOptions[2].hidden = true;
            colorOptions[3].hidden = true;
            colorOptions[4].hidden = false;
            colorOptions[5].hidden = false;
            colorOptions[6].hidden = false;

        }

    }
    
});

/************************************************
           * REGISTER FOR ACTIVITIES *
************************************************/

// Creating an element to display the total activity cost.
const activities = document.getElementsByClassName('activities');
const activitiesInput = document.querySelectorAll('.activities input'); 
const totalCostDiv = document.createElement('div');
activities[0].appendChild(totalCostDiv);
let totalCost = 0;

// Updating and displaying the total activity cost.
activities[0].addEventListener('change', (e) => {
    const clicked = e.target;

    activityCost = parseInt( clicked.getAttribute('data-cost') );

    if(clicked.checked) {

        totalCost += activityCost;

    } else {

        totalCost -= activityCost;

    }

    totalCostDiv.textContent = `Total: $ ${totalCost}`;
    
    // Disabling conflicting activities.
    for(let i = 0; i < activitiesInput.length; i++) {

        clickedDayAndTime = clicked.getAttribute('data-day-and-time');
        checkedDayAndTime = activitiesInput[i].getAttribute('data-day-and-time');

        if ( clickedDayAndTime === checkedDayAndTime &&
            clicked !== activitiesInput[i] ) {

                if (clicked.checked) {

                    activitiesInput[i].disabled = true;

                } else {
                   
                    activitiesInput[i].disabled = false;

                }

            }

    }

});


/************************************************
                * PAYMENT SECTION *
************************************************/

// Selecting and hiding payment options ( credit card will be the default option).
const paymentSelect = document.getElementById('payment');
const creditCardDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');
paymentSelect[0].hidden = true;
paymentSelect[1].selected = true;
paypalDiv.hidden = true;
bitcoinDiv.hidden = true;

paymentSelect.addEventListener('change', (e) => {

        if (e.target.value === 'credit card') {

            creditCardDiv.hidden = false;
            paypalDiv.hidden = true;
            bitcoinDiv.hidden = true;

        } else if (e.target.value === 'paypal') {

            creditCardDiv.hidden = true;
            paypalDiv.hidden = false;
            bitcoinDiv.hidden = true;


        } else if (e.target.value === 'bitcoin') {

            creditCardDiv.hidden = true;
            paypalDiv.hidden = true;
            bitcoinDiv.hidden = false;

        }

});

/************************************************
                * FORM VALIDATION *
************************************************/

/***Error message function***/

// This function assigns an error message to every input only if is invalid.
const showErrorMessage = (divMsgId, errorMsg, target) => {

    const divMsg = document.createElement('div');
    divMsg.classList.add('error');
    divMsg.id = divMsgId;
    target.parentNode.insertBefore(divMsg, target);
    document.getElementById(divMsgId).textContent = errorMsg;

};

/***Name validation***/

const nameInput = document.getElementById('name');
const nameValidation = () => {
    
    // This function uses one RegExp to test the name input.
    const nameTest = /^([a-zA-Z ]){2,30}$/.test(nameInput.value);
    
    if (nameTest === true) {
        
        showErrorMessage('nameError', '', nameInput);
        nameInput.style.borderColor = 'green';
        return true;

    } else {
        
        showErrorMessage('nameError', 'Please enter a valid name', nameInput);
        nameInput.style.borderColor = 'red';
        return false;
    }

};

nameValidation();
nameInput.addEventListener('input', nameValidation);


/***Email validation***/

const emailInput = document.getElementById('mail');
const emailValidation = () => {

    // This function uses one RegExp to test the email input.
    const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInput.value);

    if (emailTest === true) {
        
        showErrorMessage('emailError', '', emailInput);
        emailInput.style.borderColor = 'green';
        return true;

    } else {
        
        showErrorMessage('emailError', 'Please enter a valid email address', emailInput);
        emailInput.style.borderColor = 'red';
        return false;
    }

};

emailValidation();
emailInput.addEventListener('input', emailValidation);

/***Activities validation***/

// If the user does not select any activities, an error message will appear.
const activityValidation = () => {
   for(let i = 0; i < activitiesInput.length; i++) {

      if (activitiesInput[i].checked) {

        showErrorMessage('activitiesError', '', activities[0]);
        return true;
      
      } 

    }

       showErrorMessage('activitiesError', 'Please select one or more activities', activities[0]);
        return false;

};

activityValidation();
activities[0].addEventListener('change', activityValidation);

/***Credit Card validation***/

const creditCardInput = document.getElementById('cc-num')

const creditCardValidation = () => {

    /* This function uses three RegExp to test the credit card input
    with two conditional error messages*/
    const ccTest1 = /^\d{13,16}$/.test(creditCardInput.value);
    const ccTest2 = /^\d{1,12}$/.test(creditCardInput.value);
    const ccTest3 = /^\d{17,}$/.test(creditCardInput.value);

    if (ccTest1 === true) {

        showErrorMessage('ccError', '', creditCardInput);
        creditCardInput.style.borderColor = 'green';
        return true;

    } else if (ccTest2 === true || ccTest3 === true) {

        showErrorMessage('ccError', 'Please enter a number that is between 13 and 16 digits long', creditCardInput);
        creditCardInput.style.borderColor = 'red';
        return false;

    } else {

        showErrorMessage('ccError', 'Please enter a valid credit card number', creditCardInput);
        creditCardInput.style.borderColor = 'red';
        return false;

    }


};

creditCardValidation();
creditCardInput.addEventListener('input', creditCardValidation);

/***Zip code validation***/

const zipCodeInput = document.getElementById('zip');

const zipCodeValidation = () => {

    /* This function uses three RegExp to test the zip code input
    with two conditional error messages*/
    const zipCodeTest1 = /^\d{5}$/.test(zipCodeInput.value);
    const zipCodeTest2 = /^\d{1,4}$/.test(zipCodeInput.value);
    const zipCodeTest3 = /^\d{6,}$/.test(zipCodeInput.value);

    if (zipCodeTest1 === true) {

        showErrorMessage('zipError','', zipCodeInput);
        zipCodeInput.style.borderColor = 'green';
        return true;

    } else if (zipCodeTest2 === true || zipCodeTest3 === true) {

        showErrorMessage('zipError','Please enter a number that is 5 digits long', zipCodeInput);
        zipCodeInput.style.borderColor = 'red';
        return false;

    } else {

        showErrorMessage('zipError','Please enter a valid zip code number', zipCodeInput);
        zipCodeInput.style.borderColor = 'red';
        return false;

    }

};

zipCodeValidation();
zipCodeInput.addEventListener('input', zipCodeValidation);

/***Cvv code validation***/

const cvvInput = document.getElementById('cvv');

const cvvValidation = () => {

    /* This function uses three RegExp to test the cvv input
    with two conditional error messages*/
    const cvvTest1 = /^\d{3}$/.test(cvvInput.value);
    const cvvTest2 = /^\d{1,2}$/.test(cvvInput.value);
    const cvvTest3 = /^\d{4,}$/.test(cvvInput.value);

    if ( cvvTest1 === true) {

        showErrorMessage('cvvError', '', cvvInput);
        cvvInput.style.borderColor = 'green';
        return true;

    } else if (cvvTest2 === true || cvvTest3 === true) {

        showErrorMessage('cvvError', 'Please enter a number that is 3 digits long', cvvInput);
        cvvInput.style.borderColor = 'red';
        return false;

    } else {

        showErrorMessage('cvvError', 'Please enter a valid cvv code number', cvvInput);
        cvvInput.style.borderColor = 'red';
        return false;

    }
};

cvvValidation();
cvvInput.addEventListener('input', cvvValidation);

//***Submit event listener***//

// Preventing the default submission behavior of the form.

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    if ( !nameValidation() ) {
        e.preventDefault();
    }

    if ( !emailValidation() ) {
        e.preventDefault();
    }

    if ( !activityValidation() ) {
        e.preventDefault();
    }

    if ( paymentSelect[1].selected) {

        if ( !creditCardValidation() ) {
            e.preventDefault();
        }

        if ( !zipCodeValidation() ) {
            e.preventDefault();
        }

        if ( !cvvValidation() ) {
            e.preventDefault();
        }

    }
    
});





















