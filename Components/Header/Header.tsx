import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="Header">
      <nav>
        <Link href={"/"}>Hjem</Link>
        <Link href={"/kategorier"}>Kategorier</Link>
      </nav>
    </header>
  );
}
