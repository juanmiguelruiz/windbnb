import React from "react";
import Nav from "../Nav";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="row">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
