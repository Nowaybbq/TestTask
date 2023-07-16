import useRecipesStore from "../../store/store.js";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const RecipePage = () => {
   const { id } = useParams();
   const recipes = useRecipesStore((state) => state.recipes);
   const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
   const navigate = useNavigate();
   if (!recipe) {
      return <div>Recipe not found</div>;
   }
   const handleClick = () => {
      navigate("/");
   }
   return (
      <div>
         <button onClick={() => handleClick()}>Home</button>
         <h2>{recipe.name}</h2>
         <img className="recipes-item__image" src={recipe.image_url} alt="recipe-img" />
         <p>{recipe.description}</p>
      </div>
   );
};

export default RecipePage;
