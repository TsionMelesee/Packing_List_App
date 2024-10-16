import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]); // lift it up

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const Item = { description, quantity, packed: false, id: Date.now() };

    console.log(Item);
    onAddItems(Item);
    setDescription("");
    setQuantity(1);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }
  function handleQuantity(e) {
    setQuantity(+e.target.value);
    console.log(e.target.value);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleQuantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleDescription}
      />
      <button>ADD</button>
    </form>
  );
}
