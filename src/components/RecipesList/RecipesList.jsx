import RecipesItem from "../RecipesItem/RecipesItem";
import useRecipesStore from "../../store/store.js";
import { useEffect } from "react";
import "./recipesList.scss";

const RecipesList = () => {
  const recipes = useRecipesStore((state) => state.recipes);
  const fetchRecipes = useRecipesStore((state) => state.fetchRecipes);
  const selectedRecipes = useRecipesStore((state) => state.selectedRecipes);
  const removeSelectedRecipes = useRecipesStore(
    (state) => state.removeSelectedRecipes
  );

  useEffect(() => {
    if (recipes.length === 0) {
      fetchRecipes();
    }
  }, [recipes.length, fetchRecipes]);

  const handleDelete = () => {
    removeSelectedRecipes();
  };
  return (
    <>
      {selectedRecipes.length >= 1 ? (
        <button onClick={() => handleDelete()}>Delete Recipes</button>
      ) : null}
      <ul className="recipes-list">
        {recipes.slice(0, 15).map((recipe) => (
          <RecipesItem item={recipe} key={recipe.id} />
        ))}
      </ul>
    </>
  );
};

export default RecipesList;
