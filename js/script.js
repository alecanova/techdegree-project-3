// Setting focus on the first text field
document.getElementById('name').focus();

// Selecting global variables
const jobRole = document.getElementById('title');
const otherJobInput = document.getElementById('other-title');
const otherJobLabel = document.querySelectorAll('label')[3];

// Other job role
otherJobInput.classList.add('is-hidden');
otherJobLabel.classList.add('is-hidden');

jobRole.addEventListener ('change', (e) => {
    if ( e.target.value === 'other'){
        otherJobInput.classList.remove('is-hidden');
        otherJobLabel.classList.remove('is-hidden');
    } else {
        otherJobInput.classList.add('is-hidden');
        otherJobLabel.classList.add('is-hidden');
    }
});

// T-shirts
const colorOptions = document.getElementById('color');
const designOptions = document.getElementById('design');

colorOptions.classList.add('is-hidden');
designOptions.options[0].classList.add('is-hidden');
const pleaseSelect = document.createElement('option');
pleaseSelect.value = 'please';
pleaseSelect.innerHTML = 'Please select a T-shirt theme';
colorOptions.setAttribute('selected', true);
colorOptions.setAttribute('disabled', true);
colorOptions.insertBefore(pleaseSelect, colorOptions.options[0]);


const defaultOption = () => {
    for (let i = 0; i < colorOptions.options.length; i++){
        const please = RegExp(/Please/g);
// innerText will not return the text of elements that are hidden with CSS (textContent will). 
        if (!please.test(colorOptions.options[i].innerText)) {
           colorOptions.options[i].classList.add('is-hidden')
        } else {
            colorOptions.selectedIndex = i
        }
    }
}
defaultOption()