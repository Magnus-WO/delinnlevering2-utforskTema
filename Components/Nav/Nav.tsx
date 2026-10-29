import "./Nav.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={`Nav `}>
      <ul>
        <li>
          <Link href={"/"}>Hjem</Link>
        </li>
        <li>
          <Link href={"/oppskrifter"}>Oppskrifter</Link>
        </li>
        <li>
          <Link href={"/tilfeldigOppskrift"}>Tilfeldig oppskrift</Link>
        </li>
        <li>
          <Link href={"/om"}>Om</Link>
        </li>
      </ul>
    </nav>
  );
}
