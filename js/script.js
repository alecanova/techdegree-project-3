// Setting focus on the first text field
document.getElementById('name').focus();

// Selecting global variables
const jobRole = document.getElementById('title');
const otherJobInput = document.getElementById('other-title');
const otherJobLabel = document.querySelectorAll('label')[3];

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

