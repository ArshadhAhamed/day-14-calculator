document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.getElementById('calculator');
    
    // Create display
    const display = document.createElement('input');
    display.setAttribute('type', 'text');
    display.setAttribute('id', 'result');
    display.setAttribute('readonly', true);
    display.className = 'form-control mb-2';
    calculator.appendChild(display);
    
    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'row';
    calculator.appendChild(buttonContainer);
    
    // Create buttons
    const buttons = [
        { text: '7', id: '7' }, { text: '8', id: '8' }, { text: '9', id: '9' }, { text: '/', id: 'divide' },
        { text: '4', id: '4' }, { text: '5', id: '5' }, { text: '6', id: '6' }, { text: '*', id: 'multiply' },
        { text: '1', id: '1' }, { text: '2', id: '2' }, { text: '3', id: '3' }, { text: '-', id: 'subtract' },
        { text: '0', id: '0' }, { text: '.', id: 'decimal' }, { text: '=', id: 'equal' }, { text: '+', id: 'add' },
        { text: 'M+', id: 'memory-plus' }, { text: 'M-', id: 'memory-minus' }, { text: 'MC', id: 'memory-clear' }, { text: '%', id: 'modulus' },
        { text: 'C', id: 'clear' }
    ];
    
    buttons.forEach(button => {
        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'col-3 mb-2';
        const btn = document.createElement('button');
        btn.innerText = button.text;
        btn.setAttribute('id', button.id);
        btn.className = 'btn btn-primary btn-block';
        btn.addEventListener('click', onButtonClick);
        buttonWrapper.appendChild(btn);
        buttonContainer.appendChild(buttonWrapper);
    });
    
    // Handle keyboard events
    document.addEventListener('keydown', (event) => {
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '.', '=', 'Enter'];
        if (allowedKeys.includes(event.key)) {
            onKeyPress(event.key);
        } else {
            alert('Only numbers are allowed');
        }
    });

    // Memory functions
    let memory = 0;

    function onButtonClick(event) {
        const value = event.target.innerText;
        onKeyPress(value);
    }

    function onKeyPress(value) {
        const display = document.getElementById('result');

        if (value === '=' || value === 'Enter') {
            display.value = eval(display.value);
        } else if (value === 'C') {
            display.value = '';
        } else if (value === 'M+') {
            memory += parseFloat(display.value);
        } else if (value === 'M-') {
            memory -= parseFloat(display.value);
        } else if (value === 'MC') {
            memory = 0;
        } else {
            display.value += value;
        }
    }
});
