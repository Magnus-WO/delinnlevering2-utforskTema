import { notFound } from "next/navigation";
import "./categoryPage.css";
import { log } from "console";
import { type Meal, type Meals } from "@/types/types";
import MealCard from "@/Components/MealCard/MealCard";
import PaginationControls from "../../../Components/PaginationControls/PaginationControls";

export type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
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
      <header>
        <h1>{category}</h1>
        <p>Her finner du alle måltider som inneholder {category}</p>
      </header>
      <section className="categoryMeals">
        {meals.map((meal: Meal) => (
          <MealCard meal={meal} key={meal.idMeal} />
        ))}
      </section>
      <PaginationControls />
      {/* Style paginationControls og legge til pagination */}
    </section>
  );
}
