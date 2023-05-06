import React from "react";

const Ingredients = ({ingredients}) => {
    return (
        <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
    )
}
export default Ingredients;