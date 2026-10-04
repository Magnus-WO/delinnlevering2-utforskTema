import "./Card.css";
import Image from "next/image";

export type CardProps = {
  id: number;

  description: string;
  name: string;
  imageSrc: string;
};

export default function Card({
  id,

  description,
  name,
  imageSrc,
}: CardProps) {
  return (
    <li key={id} className="Card">
      <article>
        <Image
          src={imageSrc}
          width={300}
          height={300}
          alt={description}
        ></Image>
        <h2>{name}</h2>
        <p>{description}</p>
      </article>
    </li>
  );
}
