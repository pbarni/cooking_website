let selectedRadio;

document.querySelectorAll('.option-group input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function() {
        if (selectedRadio) {
            selectedRadio.checked = false;
        }
        selectedRadio = this.checked ? this : null;
    });
});