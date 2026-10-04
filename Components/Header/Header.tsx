import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="Header">
      <nav>
        <Link href={"/"}>Hjem</Link>
        <Link href={"/recipes"}>Oppskrifter</Link>
      </nav>
    </header>
  );
}
