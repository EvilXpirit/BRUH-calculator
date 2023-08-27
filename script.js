document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementsByName("display")[0];

    function clearDisplay() {
        display.value = '';
    }

    function deleteCharacter() {
        display.value = display.value.slice(0, -1);
    }

    function addToDisplay(value) {
        display.value += value;
    }

    function calculateResult() {
        display.value = eval(display.value);
    }

    document.querySelector("input[value='AC']").addEventListener('click', clearDisplay);
    document.querySelector("input[value='DE']").addEventListener('click', deleteCharacter);
    document.querySelector("input[value='.']").addEventListener('click', () => addToDisplay('.'));
    document.querySelector("input[value='/']").addEventListener('click', () => addToDisplay('/'));
    document.querySelector("input[value='*']").addEventListener('click', () => addToDisplay('*'));
    document.querySelector("input[value='-']").addEventListener('click', () => addToDisplay('-'));
    document.querySelector("input[value='+']").addEventListener('click', () => addToDisplay('+'));
    document.querySelector("input[value='00']").addEventListener('click', () => addToDisplay('00'));
    document.querySelector("input[value='0']").addEventListener('click', () => addToDisplay('0'));
    document.querySelector("input[value='1']").addEventListener('click', () => addToDisplay('1'));
    document.querySelector("input[value='2']").addEventListener('click', () => addToDisplay('2'));
    document.querySelector("input[value='3']").addEventListener('click', () => addToDisplay('3'));
    document.querySelector("input[value='4']").addEventListener('click', () => addToDisplay('4'));
    document.querySelector("input[value='5']").addEventListener('click', () => addToDisplay('5'));
    document.querySelector("input[value='6']").addEventListener('click', () => addToDisplay('6'));
    document.querySelector("input[value='7']").addEventListener('click', () => addToDisplay('7'));
    document.querySelector("input[value='8']").addEventListener('click', () => addToDisplay('8'));
    document.querySelector("input[value='9']").addEventListener('click', () => addToDisplay('9'));
    document.querySelector("input[value='=']").addEventListener('click', calculateResult);
});
