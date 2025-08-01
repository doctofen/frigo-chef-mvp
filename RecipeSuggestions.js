
import React from "react";

function RecipeSuggestions({ ingredients }) {
  const recipes = [
    {
      name: "Salade de poulet",
      ingredients: ["poulet", "salade", "tomate"]
    },
    {
      name: "Omelette champignons",
      ingredients: ["œuf", "champignons"]
    }
  ];

  const matches = recipes.filter((r) =>
    r.ingredients.every((i) => ingredients.includes(i))
  );

  return (
    <div>
      <h2>Recettes suggérées :</h2>
      {matches.length > 0 ? (
        matches.map((r, idx) => <p key={idx}>{r.name}</p>)
      ) : (
        <p>Aucune recette disponible</p>
      )}
    </div>
  );
}

export default RecipeSuggestions;
