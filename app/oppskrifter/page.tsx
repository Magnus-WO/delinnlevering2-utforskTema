import "./recepiesPage.css";

import FilterSelector from "@/Components/FilterSelector/FilterSelector";
import CardsDisplay from "@/Components/CardsDisplay/CardsDisplay";
import ErrorMessage from "@/Components/ErrorMessage/ErrorMessage";

export type CategoriesPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function CategoriesPage({
  searchParams,
}: CategoriesPageProps) {
  // if (process.env.NODE_ENV === "development") {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  // }
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
    <>
      {categories.length === 0 ? (
        <>
          <ErrorMessage message="Kunne ikke hente oppskrifter igjen akkurat nå, prøv igjen senere." />
        </>
      ) : (
        <>
          <h1>Kategorier</h1>
          <section className="CategoriesPageHeader">
            <div>
              <p>Her kan du finne (omtrent) alle kategorier for mat.</p>
              <p>
                Du kan for eksempel bruke denne til å finne inspirasjon til hva
                du vil lage.
              </p>
              <p>
                Bare velg typen mat, og skroll deg gjennom de fantastiske
                fristelsene!
              </p>
            </div>
            <FilterSelector as="h2" categories={categories} />
          </section>
          {mealArray === null ? (
            <ErrorMessage
              message="Kunne ikke finne oppskriftene."
              tip="Prøv et av de andre filtrene :)"
            />
          ) : (
            <CardsDisplay meals={mealArray} categories={categories} />
          )}
        </>
      )}
    </>
  );
}
