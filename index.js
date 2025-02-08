let lastOperator = '';

        function appendValue(value) {
            document.getElementById('display').value += value;
            lastOperator = '';
        }

        function setOperator(operator) {
            let display = document.getElementById('display');
            if (lastOperator) {
                display.value = display.value.slice(0, -1) + operator;
            } else {
                display.value += operator;
            }
            lastOperator = operator;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
            lastOperator = '';
        }

        function calculateResult() {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch (e) {
                alert('Invalid input');
            }
        }