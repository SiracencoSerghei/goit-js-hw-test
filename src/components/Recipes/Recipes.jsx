import React from 'react';
import Recipe from './Recipe';
import  recipes  from '../../data/recipes';


export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}