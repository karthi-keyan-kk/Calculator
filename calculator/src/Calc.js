const Calculator = () => {

    let displayValue = "";

    function appendToDisplay(value) {
        displayValue += value;
        document.getElementById("display").value = displayValue;
    }
    
    function clearDisplay() {
        displayValue = ""
        document.getElementById("display").value = "";
    }
    
    function calculate() {
        try {
            displayValue = eval(displayValue);
            document.getElementById("display").value = displayValue;
        } catch (error) {
            document.getElementById("display").value = "Error";
        }
    }
    return (
    <div className="calculator">
        <h1>Calculator</h1>
        <input type="text" id="display" readOnly/>
        <div className="buttons">
            <button onClick={()=>clearDisplay()}>C</button>
            <button onClick={()=>appendToDisplay('7')}>7</button>
            <button onClick={()=>appendToDisplay('8')}>8</button>
            <button onClick={()=>appendToDisplay('9')}>9</button>
            <button onClick={()=>appendToDisplay('+')}>+</button>
            <button onClick={()=>appendToDisplay('4')}>4</button>
            <button onClick={()=>appendToDisplay('5')}>5</button>
            <button onClick={()=>appendToDisplay('6')}>6</button>
            <button onClick={()=>appendToDisplay('-')}>-</button>
            <button onClick={()=>appendToDisplay('1')}>1</button>
            <button onClick={()=>appendToDisplay('2')}>2</button>
            <button onClick={()=>appendToDisplay('3')}>3</button>
            <button onClick={()=>appendToDisplay('*')}>*</button>
            <button onClick={()=>appendToDisplay('0')}>0</button>
            <button onClick={()=>appendToDisplay('.')}>.</button>
            <button onClick={()=>calculate()}>=</button>
            <button onClick={()=>appendToDisplay('/')}>/</button>
        </div>
    </div>
    );
}
 
export default Calculator;