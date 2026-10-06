import { notFound } from "next/navigation";
import { log } from "console";
import Image from "next/image";

import "./categoriesPage.css";
import { type Category, type Categories } from "@/types/types";
import CategoryCard from "@/Components/CategoryCard/CategoryCard";

export default async function CategoriesPage() {
  const apiKey = process.env.MEALDB_API_KEY;
  const apiURL = process.env.MEALDB_API_URL;

  const responseCategories = fetch(`${apiURL}/${apiKey}/categories.php`);

  const { categories } = await (await responseCategories).json();
  log(categories);

  return (
    <>
      <h1>Oppskrifter</h1>
      <p>Her kan du finne (omtrent) alle oppskrifter.</p>
      <p>I starten viser siden en liste over forskjellige matkategorier</p>
      <section className="displaySection">
        {categories.map((category: Category) => (
          <CategoryCard item={category} key={category.idCategory} />
        ))}
      </section>
    </>
  );
}
