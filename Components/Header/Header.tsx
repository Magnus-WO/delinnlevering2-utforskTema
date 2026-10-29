import "./Header.css";
import Link from "next/link";
import Form from "next/form";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header className="Header">
      <Nav />
      <Form action={"/oppskrifter/sok"}>
        <div className="HeaderSearch__container">
          <input type="search" name="q" required />
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
