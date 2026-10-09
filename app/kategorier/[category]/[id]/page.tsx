import { log } from "console";
import "./mealPage.css";
import { notFound } from "next/navigation";
import { Ingredient, Meal } from "@/types/types";
import Image from "next/image";

export type MealPageProps = {
  params: Promise<{
    id: number;
  }>;
};

export default async function MealPage({ params }: MealPageProps) {
  const { id } = await params;
  const apiKey = process.env.MEALDB_API_KEY;
  const apiURL = process.env.MEALDB_API_URL;

  const responseMeal = await fetch(`${apiURL}/${apiKey}/lookup.php?i=${id}`);
  if (!responseMeal.ok) {
    notFound();
  }
  const data = await responseMeal.json();

  const meal: Meal = data.meals[0];
  log(meal);
  // Burde være i en funksjon?
  const instructions = meal.strInstructions;
  const instructionsArray = instructions.split("\r\n");
  const filteredInstructionsArray = instructionsArray.filter((instruction) => {
    return instruction !== "";
  });

  // Lage array fra measures og ingredients
  const mealIngredients: Ingredient[] = Array.from(
    { length: 20 },
    (_, index) => {
      const ingredient = meal[`strIngredient${index + 1}` as keyof Meal];
      const measure = meal[`strMeasure${index + 1}` as keyof Meal];
      return {
        ingredient: typeof ingredient === "string" ? ingredient.trim() : "",
        measure: typeof measure === "string" ? measure.trim() : "",
      };
    },
  ).filter((item) => item.ingredient !== "");
  log(mealIngredients);

  return (
    <section className="MealPage">
      <h1>{meal.strMeal}</h1>
      <div>
        <Image src={meal.strMealThumb} alt="" height={300} width={300}></Image>

        <section className="ingredients">
          <h2>Du trenger</h2>
          <ul>
            {mealIngredients.map((ingredient) => (
              <li className="ingredient">
                <span>{ingredient.ingredient}</span>
                <span>{ingredient.measure}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="instructions">
        <h2>Slik gjør du:</h2>
        <ul className="instructionsList">
          {filteredInstructionsArray.map((instruction) => (
            <li className="instruction">
              <input type="checkbox" />
              {instruction}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
