import { Meal } from "@/typescript/types/types";

import "./MealCard.css";
import Image from "next/image";
import Link from "next/link";
export type MealCardProps = {
  meal: Meal;
  className?: string;
};

export default function MealCard({ meal, className }: MealCardProps) {
  return (
    <article className={`Card MealCard  ${className}`}>
      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={200}
        height={200}
      ></Image>
      <h2>{meal.strMeal}</h2>
      <p>Område: {meal.strArea}</p>
      <p>Land: {meal.strCountry}</p>
      <Link href={`/oppskrifter/${meal.strMeal}/${meal.idMeal}`}>
        Se oppskrift for {meal.strMeal}
      </Link>
    </article>
  );
}
