// Setting focus on the first text field
document.getElementById('name').focus();

// Other job role
const jobRole = document.getElementById('title');
const otherJobInput = document.getElementById('other-title');
const otherJobLabel = document.querySelectorAll('label')[3];

otherJobInput.hidden = true;
otherJobLabel.hidden = true;

jobRole.addEventListener ('change', (e) => {
    if ( e.target.value === 'other'){
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
    
    for(let i = 0; i < designOptions.length; i++){
        const eventTarget = e.target.value;

        if(eventTarget === designOptions[1].value){
            colorOptions[1].selected = true;

            colorOptions[0].hidden = true;
            colorOptions[1].hidden = false;
            colorOptions[2].hidden = false;
            colorOptions[3].hidden = false;
            colorOptions[4].hidden = true;
            colorOptions[5].hidden = true;
            colorOptions[6].hidden = true;

        } else if (eventTarget === designOptions[2].value){
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




















/******************************************** 
const defaultOption = () => {
    for (let i = 0; i < colorOptions.options.length; i++){
        const please = RegExp(/Please/g);
// innerText will not return the text of elements that are hidden with CSS (textContent will). 
// Se non è stato selezionato nulla (!bang = false) allora tutto nascosto
        if (please.test(colorOptions.options[i].innerText ===)) {
           colorOptions.options[i].classList.add('is-hidden')
        } else {
// Se qualcosa è selezionato viene riportato l'elemento selezionato(selectedIndex)
            colorOptions.selectedIndex = i
        }
    }
}
defaultOption()
*************************************************/
