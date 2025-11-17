// src/components/App.tsx

export default function HandleClick() {

    const handleClick = () => {
        console.log("I'm a button!");
    };

    return <button onClick={handleClick}>Click me!</button>;
}
