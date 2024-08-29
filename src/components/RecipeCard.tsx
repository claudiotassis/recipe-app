import React from 'react';
import { useDispatch } from 'react-redux';
import { removeRecipe } from '../redux/store';

interface RecipeCardProps {
  recipe: { id: number; name: string; image: string; description: string };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeRecipe(recipe.id));
  };

  return (
    <div className="card mb-4">
      <img src={recipe.image} className="card-img-top" alt={recipe.name} />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">{recipe.description}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
