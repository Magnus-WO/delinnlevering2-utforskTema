import { notFound } from "next/navigation";
import { log } from "console";
import Image from "next/image";

import "./recipesPage.css";
import { type Category, type Categories } from "@/types/types";
import Card from "@/Components/Card/Card";

export default async function RecipiesPage() {
  const apiKey = process.env.API_KEY;
  const apiURL = process.env.API_URL;
  const response = await fetch(`${apiURL}/${apiKey}/categories.php`);

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  const categories: Categories = data.categories;
  log(categories);

  return (
    <>
      <h1>Oppskrifter</h1>
      <p>Her kan du finne (omtrent) alle oppskrifter.</p>
      <p>I starten viser siden en liste over forskjellige matkategorier</p>
      <section className="displaySection">
        <ul>
          {categories.map((category) => (
            <Card
              id={category.idCategory}
              description={category.strCategoryDescription}
              name={category.strCategory}
              imageSrc={category.strCategoryThumb}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
