import React from "react";
import  Ingredients  from './ingredients'
;
 function Recipe({recipe}) {
    const{ ingredients } = recipe;
  return (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
            <Ingredients ingredients={ingredients}/>
        </div>
      )}
      export default Recipe;