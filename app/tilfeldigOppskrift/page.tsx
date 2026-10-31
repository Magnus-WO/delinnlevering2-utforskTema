"use client";

import "./RandomMealPage.css";
import { Meal } from "@/typescript/types/categoryTypes";
import MealCard from "@/Components/MealCard/MealCard";
import Button from "@/Components/Button/Button";
import ErrorMessage from "@/Components/ErrorMessage/ErrorMessage";
import Spinner from "@/Components/Spinner/Spinner";

import { useEffect, useState } from "react";

import handleFetchRandomMeal from "@/requests/handleFetchRandomMeal";

export default function RandomMealPage() {
  const [randomMeal, setRandomMeal] = useState<Meal>();
  const [triggerEffect, setTriggerEffect] = useState<number>(Date.now());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    async function getRandomMeal() {
      try {
        const data: Meal = await handleFetchRandomMeal();
        setShowError(false);
        setIsLoading(true);
        if (!data) {
          setShowError(true);
          setIsLoading(false);
          return;
        } else {
          setShowError(false);
          setIsLoading(false);
          setRandomMeal(data);

          return;
        }
      } catch (error) {
        setShowError(true);
      }
    }
    getRandomMeal();
  }, [triggerEffect]);

  return (
    <div className="RandomMealPage">
      <h1>Tilfeldig oppskrift</h1>{" "}
      <div>
        <section>
          {isLoading && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Spinner />
            </div>
          )}
          {showError && (
            <ErrorMessage message="Kunne ikke hente oppskriften." />
          )}
          {!isLoading && randomMeal && (
            <MealCard meal={randomMeal} className="randomMealPage__mealCard" />
          )}
        </section>

        <Button
          type="button"
          className="Button-primary"
          onClick={() => {
            setTriggerEffect(Date.now());
          }}
        >
          Ny oppskrift
        </Button>
      </div>
    </div>
  );
}
