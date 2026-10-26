"use client";

import "./Search.css";

import Form from "next/form";
import Button from "../Button/Button";

export type SearchProps = {
  actionURL: string;
};

export default function Search({ actionURL }: SearchProps) {
  return (
    <Form action={actionURL}>
      <div className="Search__container">
        <input type="text" name="q" placeholder="søk" />

        <Button type="submit" className={"Button-primary HeaderSearch__button"}>
          🔮
        </Button>
      </div>
    </Form>
  );
}
