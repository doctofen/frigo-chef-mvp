
import React, { useState } from "react";

function AddIngredientForm({ addIngredient }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addIngredient(input.trim().toLowerCase());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter un aliment"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddIngredientForm;
