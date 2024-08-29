import React from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';

const RecipeList: React.FC = () => {
  const recipes = useSelector((state: any) => state.recipes.recipes);
  const searchTerm = useSelector((state: any) => state.recipes.searchTerm);

  const filteredRecipes = recipes.filter((recipe: any) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="row">
      {filteredRecipes.map((recipe: any) => (
        <div key={recipe.id} className="col-md-4">
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
