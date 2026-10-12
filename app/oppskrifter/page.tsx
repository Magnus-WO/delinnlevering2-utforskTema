import "./categoriesPage.css";

import FilterSelector from "@/Components/FilterSelector/FilterSelector";
import CardsDisplay from "@/Components/CardsDisplay/CardsDisplay";

export type CategoriesPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function CategoriesPage({
  searchParams,
}: CategoriesPageProps) {
  const apiKey = process.env.MEALDB_API_KEY;
  const apiURL = process.env.MEALDB_API_URL;
  const { q } = await searchParams;

  let responseCategories;

  let mealArray = [];
  responseCategories = await fetch(`${apiURL}/${apiKey}/categories.php`);
  const { categories } = await responseCategories.json();

  if (q) {
    responseCategories = await fetch(`${apiURL}/${apiKey}/filter.php?c=${q}`);
    const { meals } = await responseCategories.json();
    mealArray = meals;
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
      <CardsDisplay meals={mealArray} categories={categories} />
    </section>
  );
}
