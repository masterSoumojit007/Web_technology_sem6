const textInput = document.getElementById('textInput');
const characterCount = document.getElementById('characterCount');

textInput.addEventListener('input', function() {
    const maxLength = parseInt(textInput.getAttribute('maxlength'));
    const currentLength = textInput.value.length;
    const remainingLength = maxLength - currentLength;

    if (remainingLength >= 0) {
        characterCount.textContent = remainingLength;
    } else {
        textInput.value = textInput.value.slice(0, maxLength);
    }
});
