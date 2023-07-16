import React, { useState } from "react";
import "./recipesItem.scss";
import useRecipesStore from "../../store/store";
import { useNavigate } from "react-router-dom";
const RecipesItem = (props) => {
  const { name, description, image_url, ph, id } = props.item;
  const removeSelectedRecipe = useRecipesStore(
    (state) => state.removeSelectedRecipe
  );
  const selectRecipe = useRecipesStore((state) => state.selectRecipe);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleContextMenu = (e, id) => {
    e.preventDefault();
    if (e.button === 2) {
      setIsActive(!isActive);
      if (isActive) {
        removeSelectedRecipe(id);
      } else {
        selectRecipe(id);
      }
    }
  };
  const handleClick = () => {
    navigate(`/recipes/${id}`);
  };

  return (
    <li
      onClick={handleClick}
      key={id}
      onContextMenu={(e) => handleContextMenu(e, id)}
      className={`recipes-item${isActive ? "--active" : ""}`}
    >
      <div className="recipes-item__content">
        <h3 className="recipes-item__name">{name}</h3>
        <img className="recipes-item__image" src={image_url} alt="recipe-img" />
        <p className="recipes-item__info">{description}</p>
        <p className="recipes-item__ph">{ph}</p>
      </div>
    </li>
  );
};

export default RecipesItem;
