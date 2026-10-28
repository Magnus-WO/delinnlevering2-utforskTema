"use server";

const apiUrl = process.env.MEALDB_API_URL;
const apiKey = process.env.MEALDB_API_KEY;

export default async function handleFetchRandomMeal() {
  const response = await fetch(`${apiUrl}/${apiKey}/random.php`);
  const { meals } = await response.json();
  return meals[0];
}
