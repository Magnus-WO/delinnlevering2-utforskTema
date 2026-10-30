import { notFound } from "next/navigation";
import "./categoryPage.css";

import { type Meal, type Meals } from "@/typescript/types/types";
import MealCard from "@/Components/MealCard/MealCard";
import CardsDisplay from "@/Components/CardsDisplay/CardsDisplay";
import ErrorMessage from "@/Components/ErrorMessage/ErrorMessage";

export type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  // if (process.env.NODE_ENV === "development") {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  // }
  const { category } = await params;
  const apiKey = process.env.MEALDB_API_KEY;
  const apiURL = process.env.MEALDB_API_URL;

  const responseCategory = await fetch(
    `${apiURL}/${apiKey}/filter.php?c=${category}`,
  );
  if (!responseCategory.ok) {
    notFound();
  }

  const data = await responseCategory.json();
  const meals: Meals = data.meals;

  return (
    <section className="CategoryPage">
      <h1>{category}</h1>
      <p>Her finner du alle måltider som inneholder {category}</p>
      {meals === undefined || meals === null || meals.length === 0 ? (
        <ErrorMessage
          message="Kunne ikke hente disse måltidene akkurat nå, prøv igjen senere."
          tip="Det kan hende en av de andre kategoriene er mer vennlige, prøv en av de :)"
        />
      ) : (
        <CardsDisplay meals={meals} />
        // <section className="categoryMeals">
        //   {meals.map((meal: Meal) => (
        //     <MealCard meal={meal} key={meal.idMeal} />
        //   ))}
        // </section>
      )}
    </section>
  );
}
