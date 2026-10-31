"use client";

import "./Search.css";

import Form from "next/form";
import Button from "../Button/Button";

export type SearchProps = {
  id: string;
};

export default function Search({ id }: SearchProps) {
  return (
    <Form action={"/oppskrifter/sok"}>
      <div className="Search__container">
        <label htmlFor={id}>Søk:</label>
        <input type="text" name="q" required id={id} />

        <Button type="submit" className={"Button-primary HeaderSearch__button"}>
          🔮
        </Button>
      </div>
    </Form>
  );
}
