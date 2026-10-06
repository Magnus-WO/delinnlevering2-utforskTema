import { notFound } from "next/navigation";
import { log } from "console";

import "./nutritionalValuePage.css";

export default async function NutritionalValuePage() {
  const apiKey = process.env.FATSECRET_CLIENT_SECRET;
  const apiURL = process.env.FATSECRET_URL;
  const response = await fetch(`${apiURL}/recipe-types/v2`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      format: "JSON",
    },
  });

  log(response);

  if (!response.ok) {
    notFound();
  }
}
