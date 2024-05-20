import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAddition = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        setResult(`Result: ${sum}`);
    };

    const handleSubtraction = () => {
        const difference = parseFloat(num1) - parseFloat(num2);
        setResult(`Result: ${difference}`);
    };

    const handleMultiplication = () => {
        const product = parseFloat(num1) * parseFloat(num2);
        setResult(`Result: ${product}`);
    };

    const handleDivision = () => {
        const quotient = parseFloat(num1) / parseFloat(num2);
        setResult(`Result: ${quotient}`);
    };

    return (
        <div>
            <h2>Calculator</h2>
            <div>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Enter number 1"
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Enter number 2"
                />
            </div>
            <div>
                <button onClick={handleAddition}>Addition</button>
                <button onClick={handleSubtraction}>Subtraction</button>
                <button onClick={handleMultiplication}>Multiplication</button>
                <button onClick={handleDivision}>Division</button>
            </div>
            <div>{result}</div>
        </div>
    );
};

export default Calculator;
