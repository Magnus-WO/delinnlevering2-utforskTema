import { Meal } from "@/types/types";

import "./MealCard.css";
import Image from "next/image";
import Link from "next/link";
export type MealCardProps = {
  meal: Meal;
};

export default function MealCard({ meal }: MealCardProps) {
  return (
    <article className="MealCard Card">
      <Image src={meal.strMealThumb} alt="" width={200} height={200}></Image>
      <h2>{meal.strMeal}</h2>
      <p>Område: {meal.strArea}</p>
      <p>Land: {meal.strCountry}</p>
      {/* <Link href={`/`}></Link> */}
    </article>
  );
}
