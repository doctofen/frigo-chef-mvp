
import React from "react";

function Fridge({ ingredients, removeIngredient }) {
  return (
    <div>
      <h2>Mon frigo :</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeIngredient(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fridge;
