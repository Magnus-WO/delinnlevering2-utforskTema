import "./searchPage.css";
import CardsDisplay from "@/Components/CardsDisplay/CardsDisplay";
import ErrorMessage from "@/Components/ErrorMessage/ErrorMessage";

import { Suspense } from "react";
import Loading from "./loading";
import { log } from "console";

export type SearchPageProps = {
  searchParams: Promise<{
    q: string | undefined;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  // if (process.env.NODE_ENV === "development") {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  // }
  const { q } = await searchParams;

  const apiKey = process.env.MEALDB_API_KEY;
  const apiURL = process.env.MEALDB_API_URL;
  const response = await fetch(`${apiURL}/${apiKey}/search.php?s=${q}`);
  const { meals } = await response.json();

  return (
    <>
      {q && (
        <>
          {meals === null ? (
            <ErrorMessage
              message="Det du søker etter finnes dessverre ikke. Prøv å søke på nytt."
              tip="søk på engelsk for bedre treff :)"
            />
          ) : (
            <>
              <h1>
                Søk: <span>{q}</span>
              </h1>
              <Suspense fallback={<Loading />} key={q}>
                <CardsDisplay meals={meals} categories={[]} />
              </Suspense>
            </>
          )}
        </>
      )}
      {q || <p>Du må skrive inn i søkefeltet det du vil søke etter</p>}
    </>
  );
}
