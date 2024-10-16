import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";
// eslint-disable-next-line no-unused-vars
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "HeadPhone", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  // ///Drived state
  // const numItems = items.length;

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleTogglePacking(id) {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  }
  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delate all items"
    );
    if (confirmed) setItems([]); // Clears the items array
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        handleTogglePacking={handleTogglePacking}
        handleDelete={handleDelete}
      />
      <Stats items={items} />
    </div>
  );
}
