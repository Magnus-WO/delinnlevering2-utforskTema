import "./Header.css";

import Nav from "../Nav/Nav";

import Search from "../Search/Search";

export default function Header() {
  return (
    <header className="Header">
      <Nav />
      <Search id="header-search" />
    </header>
  );
}
