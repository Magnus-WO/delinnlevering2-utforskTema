"use client";

import "./PaginationControls.css";
import Button from "../Button/Button";

export default function PaginationControls() {
  return (
    <div className="PaginationControls">
      <Button>Forrige</Button>
      <p></p>
      <Button>Neste</Button>
    </div>
  );
}
