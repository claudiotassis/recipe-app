import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Recipe {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface RecipesState {
  recipes: Recipe[];
  searchTerm: string;
}

const initialState: RecipesState = {
  recipes: [],
  searchTerm: '',
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.recipes.push(action.payload);
    },
    removeRecipe: (state, action: PayloadAction<number>) => {
      state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { addRecipe, removeRecipe, setSearchTerm } = recipesSlice.actions;

const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer
  }
});

export default store;
