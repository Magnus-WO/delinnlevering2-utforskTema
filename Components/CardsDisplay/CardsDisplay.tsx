import { Categories, Category, Meal, Meals } from "@/typescript/types/types";
import "./CardsDisplay.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import MealCard from "../MealCard/MealCard";

export type CardsDisplayProps = {
  meals: Meals;
  categories: Categories;
};

export default function CardsDisplay({ meals, categories }: CardsDisplayProps) {
  return (
    <>
      {meals.length === 0 ? (
        <section className="CardsDisplay">
          {categories.map((category: Category) => (
            <CategoryCard key={category.idCategory} item={category} />
          ))}
        </section>
      ) : (
        <section className="CardsDisplay">
          {meals.map((meal: Meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </section>
      )}
    </>
  );
}
