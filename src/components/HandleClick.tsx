// src/components/App.tsx

export default function HandleClick() {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event, "I'm a button!", event.target);
    };

    return <button onClick={handleClick}>Click me!</button>;
}
