import "./mealPage.css";

import { Ingredient, Meal } from "@/typescript/types/types";
import Image from "next/image";
import ErrorMessage from "@/Components/ErrorMessage/ErrorMessage";

export type MealPageProps = {
  params: Promise<{
    id: number;
  }>;
};

export default async function MealPage({ params }: MealPageProps) {
  // if (process.env.NODE_ENV === "development") {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  // }

  const { id } = await params;
  const apiKey = process.env.MEALDB_API_KEY;
  const apiURL = process.env.MEALDB_API_URL;

  const responseMeal = await fetch(`${apiURL}/${apiKey}/lookup.php?i=${id}`);

  const data = await responseMeal.json();
  if (!data.meals) {
    return (
      <ErrorMessage message="Kunne ikke hente oppskriften akkurat nå. Prøv igjen senere." />
    );
  }

  const meal: Meal = data.meals[0];

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
        id: index + 1,
        ingredient: typeof ingredient === "string" ? ingredient.trim() : "",
        measure: typeof measure === "string" ? measure.trim() : "",
      };
    },
  ).filter((item) => item.ingredient !== "");

  return (
    <>
      {!data.meals ? (
        <ErrorMessage message="Kunne ikke hente oppskriften akkurat nå. Prøv igjen senere." />
      ) : (
        <section className="MealPage">
          <h1>{meal.strMeal}</h1>
          <div>
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              height={300}
              width={300}
            ></Image>

            <section className="ingredients">
              <h2>Du trenger</h2>
              {mealIngredients === undefined || mealIngredients.length === 0 ? (
                <ErrorMessage message="Kunne ikke hente ingrediensene." />
              ) : (
                <ul>
                  {mealIngredients.map((ingredient) => (
                    <li className="ingredient" key={ingredient.id}>
                      <span>{ingredient.ingredient}</span>
                      <span>{ingredient.measure}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>

          <section className="instructions">
            <h2>Slik gjør du:</h2>
            {filteredInstructionsArray === undefined ||
            filteredInstructionsArray.length === 0 ? (
              <ErrorMessage message="Kunne ikke hente instrukser." />
            ) : (
              <ul className="instructionsList">
                {filteredInstructionsArray.map((instruction) => (
                  <li className="instruction" key={instruction}>
                    <input type="checkbox" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </section>
      )}
    </>
  );
}
