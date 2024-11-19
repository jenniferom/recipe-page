import Section from "../components/Section";


const RecipeContainer =()=>{
    return(
        <div className="container">
            
            <img className="image" src="/images/image-omelette.jpeg" alt="omelette" />
            
            <h1>Simple Omelette Recipe</h1>
            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of chesse, vegetables, or meats.</p>
            <div className='preparation-time'>
              <h3>Preparation time</h3>
              <ul>
                <li><b>Total</b>: Approximately 10 minutes</li>
                <li><b>Preparation</b>: 5 minutes</li>
                <li><b>Cooking</b>: 5 minutes</li>
              </ul>
            </div>

            <Section title="Ingredients" >
                <ul>
                  <li>2-3 large eggs</li>
                  <li>Salt, to taste</li>
                  <li>Pepper, to taste</li>
                  <li>1 tablepoon of butter or oil</li>
                  <li>Optional filling: cheese, diced vegetables, cooked meats, herbs</li>
                </ul>
            </Section>

            <Section title="Instructions">
              <ol>
                <li><strong>Beat the eggs</strong>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of wahter or milk for a fluffier texture.</li>
                <li><b>Heat the pan</b>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
                <li><b>Cook the omelette</b>:  Once the butter is melted and bubbling, pour in the eggs. Tit the pan to ensure the eggs evenly coat the surface.</li>
                <li><b>Add fillings (optional)</b>: When the eggs begin to set al the edges but ae still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette</li>
                <li><b>Fold and serve</b>: As the omelette continues to cook, carefully lift one edge ad fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                <li><b>Enjoy</b>: Serve hot, with additional salt and pepper if needed</li>
              </ol>
            </Section>

            <Section title="Nutrition">
              <p>The table below shows nutritional values per serving without the additional fillings</p>
              <table className="table">
                <tbody>
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
                </tbody>
              </table>
            </Section>
        </div>
    );
}

export default RecipeContainer
