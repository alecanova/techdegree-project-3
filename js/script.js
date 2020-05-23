// Setting focus on the first text field
document.getElementById('name').focus();


// Other job role
const jobRole = document.getElementById('title');
const otherJobInput = document.getElementById('other-title');
const otherJobLabel = document.querySelectorAll('label')[3];

otherJobInput.hidden = true;
otherJobLabel.hidden = true;

jobRole.addEventListener ('change', (e) => {
    
    if ( e.target.value === 'other') {

        otherJobInput.hidden = false;
        otherJobLabel.hidden = false;

    } else {

        otherJobInput.hidden = true;
        otherJobLabel.hidden = true;

    }

});

// T-shirts
const colorDiv = document.getElementById("colors-js-puns");
const colorSelect = document.getElementById('color');
const designSelect = document.getElementById('design');
const colorOptions = document.getElementById('color').options;
const designOptions = document.getElementById('design').options;
designOptions[0].hidden = true;
const pleaseSelect = document.createElement('option');
pleaseSelect.value = '';
pleaseSelect.innerHTML = 'Please select a T-shirt theme';
colorSelect.insertBefore(pleaseSelect, colorOptions[0]);
colorOptions[0].selected = true;
//colorDiv.hidden = true;

designSelect.addEventListener('change', (e) => {
    //colorDiv.hidden = false;
    
    for(let i = 0; i < designOptions.length; i++) {
        const eventTarget = e.target.value;

        if(eventTarget === designOptions[1].value) {
            colorOptions[1].selected = true;

            colorOptions[0].hidden = true;
            colorOptions[1].hidden = false;
            colorOptions[2].hidden = false;
            colorOptions[3].hidden = false;
            colorOptions[4].hidden = true;
            colorOptions[5].hidden = true;
            colorOptions[6].hidden = true;

        } else if (eventTarget === designOptions[2].value) {
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

// Register for activities

const activities = document.getElementsByClassName('activities');
//const activitiesInput = document.querySelectorAll('.activities input');
const totalCostDiv = document.createElement('div');
activities[0].appendChild(totalCostDiv);
let totalCost = 0;


activities[0].addEventListener('change', (e) => {
    const clicked = e.target;
    activityCost = parseInt( clicked.getAttribute('data-cost') );

    if(clicked.checked) {

        totalCost += activityCost;

    } else {

        totalCost -= activityCost;

    }

    totalCostDiv.textContent = `Total: $ ${totalCost}`;

});























