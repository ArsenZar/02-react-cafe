import { useState } from "react";

export default function ToggleMessage() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleButton() { 
        setIsOpen( state => !state);
    }

    return (
        <>
            <button onClick={toggleButton}>Toggle { isOpen ? "Hide" : "Show"}</button>
            {isOpen && <p>Hello React!</p>}
        </>
    );
}