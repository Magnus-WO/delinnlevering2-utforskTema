import { log } from "console";

import "./categoriesPage.css";
import { Meal, Meals, type Category } from "@/types/types";
import CategoryCard from "@/Components/CategoryCard/CategoryCard";
import FilterSelector from "@/Components/FilterSelector/FilterSelector";
import MealCard from "@/Components/MealCard/MealCard";

export type CategoriesPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function CategoriesPage({
  searchParams,
}: CategoriesPageProps) {
  const apiKey = process.env.MEALDB_API_KEY;
  const apiURL = process.env.MEALDB_API_URL;
  const { q } = await searchParams;

  log("q er", q);
  let responseCategories;

  let mealArray = [];
  responseCategories = await fetch(`${apiURL}/${apiKey}/categories.php`);
  const { categories } = await responseCategories.json();

  if (q) {
    responseCategories = await fetch(`${apiURL}/${apiKey}/filter.php?c=${q}`);
    const { meals } = await responseCategories.json();
    mealArray = meals;
    log("meals er", mealArray);
  }

  return (
    <section className="CategoriesPage">
      <h1>Kategorier</h1>
      <section className="CategoriesPageHeader">
        <div>
          <p>Her kan du finne (omtrent) alle kategorier for mat.</p>
          <p>
            Du kan for eksempel bruke denne til å finne inspirasjon til hva du
            vil lage.
          </p>
          <p>
            Bare velg typen mat, og skroll deg gjennom de fantastiske
            fristelsene!
          </p>
        </div>
        <FilterSelector as="h2" categories={categories} />
      </section>

      {mealArray.length === 0 ? (
        <section className="displaySection">
          {categories.map((category: Category) => (
            <CategoryCard key={category.idCategory} item={category} />
          ))}
        </section>
      ) : (
        <section className="displaySection">
          {mealArray.map((meal: Meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </section>
      )}
    </section>
  );
}
