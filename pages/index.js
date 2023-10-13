import { useState, useCallback, useEffect, useRef } from "react";
import ItemList from "../components/ItemList";

export default function Home() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");
  const optimize = useCallback(() => {
    setItems((oldValue) => {
      return [...oldValue, "Item"];
    });
    setMessage("Item added syccessfully!");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [setItems]);

  return (
    <div>
      <button onClick={optimize}>Add Item</button>
      <ItemList items={items} />
      {message && <p id="message">{message}</p>}
    </div>
  );
}
