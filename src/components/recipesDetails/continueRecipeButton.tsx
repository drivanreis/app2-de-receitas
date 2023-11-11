import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ContinueRecipeButton({ recipe, recipeType }) {
  const navigate = useNavigate();

  const redirectRecipeProgress = () => {
    if (recipeType === 'food') {
      const idRecipeFood = recipe[0].idMeal;
      navigate(`/foods/${idRecipeFood}/in-progress`);
    } else {
      const idRecipeDrink = recipe[0].idDrink;
      navigate(`/drinks/${idRecipeDrink}/in-progress`);
    }
  };

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      className="continue-recipe-button"
      style={ { position: 'fixed', bottom: 0 } }
      onClick={ () => redirectRecipeProgress() }
    >
      Continue Recipe
    </button>
  );
}

ContinueRecipeButton.propTypes = {
  recipe: PropTypes.array.isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default ContinueRecipeButton;
