// src/components/App.tsx
import { useState } from "react";
import Product from "./Product";
import Mailbox from "./Mailbox";
import Book from "./Book";
import UserMenu from "./UserMenu";
import HandleClick from "./HandleClick";
import TestButton from "./TestButton";
import ClickCounter from "./ClickCounter";
import NumberInput from "./NumberInput";

export default function App() {

  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };


  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <>
      <NumberInput label="Number 1" value={a} onValueChange={setA} />
      <NumberInput label="Number 2" value={b} onValueChange={setB} />
      <p>Result: {a + b}</p>


      <button onClick={handleClick}>Clicked: {count}</button>
      <button onClick={toggleMessage}>
        {isOpen ? "Hide message" : "Show message"}
      </button>

      {isOpen && <p>🎉 Surprise! You toggled me.</p>}

      <br />
      <br />

      <ClickCounter />
      <ClickCounter />
      <br></br>
      <HandleClick />
      <TestButton />
      <UserMenu name="Arseniy" />
      <Book type="error"/>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Mailbox username="Arsen" messages={["hello", "how r u?"]} />
    </>
  );
}
