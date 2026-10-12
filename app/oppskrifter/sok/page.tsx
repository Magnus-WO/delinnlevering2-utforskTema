import "./searchPage.css";
import CardsDisplay from "@/Components/CardsDisplay/CardsDisplay";

export type SearchPageProps = {
  searchParams: Promise<{
    q: string | undefined;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  const apiKey = process.env.MEALDB_API_KEY;
  const apiURL = process.env.MEALDB_API_URL;
  const response = await fetch(`${apiURL}/${apiKey}/search.php?s=${q}`);
  const { meals } = await response.json();

  return (
    <>
      {q && (
        <>
          <h1>
            Søk: <span>{q}</span>
          </h1>
          <CardsDisplay meals={meals} categories={[]} />
        </>
      )}
      {q || <p>Du må skrive inn i søkefeltet det du vil søke etter</p>}
    </>
  );
}
