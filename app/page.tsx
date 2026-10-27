import "./HomePage.css";
import MealCard from "@/Components/MealCard/MealCard";
import FilterSelector from "@/Components/FilterSelector/FilterSelector";
import Search from "@/Components/Search/Search";
import { redirect } from "next/navigation";
import Button from "@/Components/Button/Button";
import { Meal } from "@/types/types";

export type HomeProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  // if (process.env.NODE_ENV === "development") {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  // }

  const apiKey = process.env.MEALDB_API_KEY;
  const apiURL = process.env.MEALDB_API_URL;
  const { q } = await searchParams;

  // Random meal
  let randomMeal: Meal;
  const randomMealResponse = await fetch(`${apiURL}/${apiKey}/random.php`);
  const { meals } = await randomMealResponse.json();
  randomMeal = meals[0];

  // Kategorier
  const categoriesResponse = await fetch(`${apiURL}/${apiKey}/categories.php`);
  const { categories } = await categoriesResponse.json();
  if (q) {
    redirect(`/oppskrifter/${q}`);
  }

  async function handleGetRandomMeal() {
    const randomMealResponse = await fetch(`${apiURL}/${apiKey}/random.php`);
    const { meals } = await randomMealResponse.json();
    randomMeal = meals[0];
  }

  return (
    <>
      <h1>Alkemistens Almanakk</h1>
      <section className="LandingPage">
        <div className="landingPage__styleContainer">
          <MealCard
            meal={randomMeal}
            className="MealCard__landingPage"
          ></MealCard>
          <section className="landingPage__text">
            <p>
              Trenger du hjelp til å finne oppskrifter? Usikker på hva du vil ha
              til middag? Eller kanskje du ikke heeelt husker akkurat hvordan
              den retten lages?
            </p>
            <br />
            <p>
              Uansett hva du lurer på angående hvordan en rett lages kan du
              finne det her! Du kan søke opp en matrett med det{" "}
              <span className="text__green">grønne</span>
              søkefeltet, sortere etter forskjellige kategorier med den{" "}
              <span className="text__brown">grå-brune</span>
              menyen, eller du kan få en tilfeldig rett med den oransje knappen
              dersom fantasien ikke strakk helt til i dag.
            </p>
            <br />
            <p>
              Bildet du ser gir deg et tilfeldig måltid hver gang du går inn på
              siden på nytt, eller ved å trykke på den{" "}
              <span className="text__orange">oransje</span> knappen.
            </p>
          </section>
        </div>
        <div className="landingPage__styleContainer">
          <FilterSelector as="h2" categories={categories} />
          <Button
            type="button"
            className="randomMealBtn"
            // onClick={handleGetRandomMeal}
          >
            Gi meg en tilfeldig oppskrift
          </Button>
          <Search actionURL="/oppskrifter/sok" />
        </div>
      </section>
    </>
  );
}
