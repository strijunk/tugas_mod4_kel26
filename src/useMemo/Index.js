import { useState, useMemo } from "react";

function CalculateFactorial() {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    const factorial = useMemo(() => factorialOf(number), [number]);
    const onChange = (event) => {
        setNumber(Number(event.target.value));
    };
    const onClick = () => setInc((i) => i + 1);

    return (
        <div className="Main">
            <h2>This page is used for factorial searching purpose</h2>
            <p>The factorial of</p>
            <br></br>
            <input type="number" value={number} onChange={onChange} />
            is {factorial}
            <br></br>
            <button onClick={onClick}>Re-render</button>
        </div>
    );
}

function factorialOf(n) {
    console.log("factorialOf(n) called!");
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default CalculateFactorial;
