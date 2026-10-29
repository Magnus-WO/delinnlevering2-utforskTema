import "./Footer.css";
import "../Button/Button.css";
import Link from "next/link";
import Nav from "../Nav/Nav";

export default function Footer() {
  return (
    <footer className="Footer">
      <div>
        <Link href={"/"} className="heading">
          Alkemistens Almanakk
        </Link>
      </div>
      <Nav />
      <nav className="Footer__external-nav">
        <ul>
          <li>
            <a
              href="https://www.themealdb.com/"
              target="_blank"
              className="external-link"
            >
              The Meal DB
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Magnus-WO/delinnlevering2-utforskTema"
              target="_blank"
              className="external-link"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
