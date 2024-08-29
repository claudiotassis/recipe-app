import React from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Recipe App</h1>
      <RecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
