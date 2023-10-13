import { useState, useCallback } from "react";
import ItemList from "../components/ItemList";

export default function Home() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");

  const addItemFun = useCallback(function handleItems() {
    setItems((oldValue) => {
      return [...oldValue, `Item ${oldValue.length + 1}`];
    });
    setMessage("Item added successfully!");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, []);

  return (
    <div>
      <button onClick={addItemFun}>Add Item</button>
      <ItemList items={items} />
      {message && <p id="message">{message}</p>}
    </div>
  );
}
