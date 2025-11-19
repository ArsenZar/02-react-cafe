// src/components/App.tsx
import { useState } from "react";
import Product from "./Product";
import Mailbox from "./Mailbox";
import Book from "./Book";
import UserMenu from "./UserMenu";
import HandleClick from "./HandleClick";
import TestButton from "./TestButton";
import ClickCounter from "./ClickCounter";
import AppTest from "./AppTest";
import StepCounter from "./StepCounter";
import ToggleMessage from "./ToggleMessage";
import TextInput from "./TextInput";

export default function App() {

  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  const [firstName, setFirstName] = useState("");
  const [secName, setSecName] = useState("");


  return (
    <>
      
      <TextInput label="Name" value={firstName} onValueChange={setFirstName} />
      <TextInput label="SureName" value={secName} onValueChange={setSecName} />
      <p>Full name: {firstName} {secName}</p>

      
      <ToggleMessage />
      
      <StepCounter />

      <AppTest />

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
