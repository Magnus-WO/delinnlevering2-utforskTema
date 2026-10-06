import { Category } from "@/types/types";
import "./CategoryCard.css";
import Image from "next/image";
import Link from "next/link";

export type CardProps = {
  item: Category;
};

export default function CategoryCard({ item }: CardProps) {
  return (
    <article key={item.idCategory} className="CategoryCard Card">
      <Image
        src={item.strCategoryThumb}
        width={200}
        height={200}
        alt=""
      ></Image>
      <h2>{item.strCategory}</h2>
      <p>{item.strCategoryDescription}</p>
      <Link href={`/kategorier/${item.strCategory}`}>
        Gå til {item.strCategory}
      </Link>
    </article>
  );
}
