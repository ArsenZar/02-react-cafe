import { useState } from "react";
import NumberInput from "./NumberInput";

export default function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return (
        <>
            <NumberInput label="Number 1" value={a} onValueChange={setA} />
            <NumberInput label="Number 2" value={b} onValueChange={setB} />
            <p>Result: {a + b}</p>
        </>
    );

}