import "./Header.css";
import Link from "next/link";
import Form from "next/form";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className="Header">
      <nav>
        <Link href={"/"}>Hjem</Link>
        <Link href={"/oppskrifter"}>Oppskrifter</Link>
        <Link href={"/næringsinnhold"}>Næringsinnhold</Link>
        <Link href={"/om"}>Om</Link>
      </nav>
      <Form action={"/oppskrifter/sok"}>
        <div className="HeaderSearch__container">
          <input type="text" name="q" />
          <Button
            type="submit"
            className={"Button-primary HeaderSearch__button"}
          >
            🔮
          </Button>
        </div>
      </Form>
    </header>
  );
}
