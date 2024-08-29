import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/store';

const RecipeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && image && description) {
      dispatch(addRecipe({ id: Date.now(), name, image, description }));
      setName('');
      setImage('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Recipe Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image URL</label>
        <input
          type="text"
          id="image"
          className="form-control"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
