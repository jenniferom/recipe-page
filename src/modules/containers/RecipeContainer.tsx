const RecipeContainer =()=>{
    return(
        <div className="container">
            
            <img className="image" src="src/assets/images/image-omelette.jpeg" alt="omelette" />
            
            <h1>Simple Omelette Recipe</h1>
            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of chesse, vegetables, or meats.</p>
            <div className='preparation-time'>
              <h3><b>Preparation time</b></h3>
              <ul>
                <li><b>Total</b>: Approximately 10 minutes</li>
                <li><b>Preparation</b>: 5 minutes</li>
                <li><b>Cooking</b>: 5 minutes</li>
              </ul>
            </div>

            <div >
                <h2>Ingredients</h2>
                <ul>
                  <li>2-3 large eggs</li>
                  <li>Salt, to taste</li>
                  <li>Pepper, to taste</li>
                  <li>1 tablepoon of butter or oil</li>
                  <li>Optional filling: chesse, diced vegetables, cooked meats, herbs</li>
                </ul>
            </div>

            <h2>Instructions</h2>
            <ol>
              <li><b>Beat the eggs:</b> </li>
              <li><b>Heat the pan</b>: </li>
              <li><b>Cook the omelette</b>:  </li>
              <li><b>Add fillings (optional)</b>: When the eggs</li>
              <li><b>Fold and serve</b>: </li>
              <li><b>Enjoy</b>: Sere hot, with additional salt and pepper if needed</li>
            </ol>

            <h2>Nutrition</h2>
            <p>The table below shows nutritional values per serving without the additional fillings</p>
            <table className="table">
              <tr>
                <td>Calories</td>
                <td>277kcal</td>
              </tr>
                <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </table>
        </div>
    );
}

export default RecipeContainer