import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>eMap</span>
        </a>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/esportsmatch">Matches</a>
      </div>

      <div className="right">
        <a href="/login" className="login">
          Sign in
        </a>
        <a href="/register" className="register">
          Sign up
        </a>
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active " : "menu"}>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/matches">Matches</a>
          <a href="/login">Sign in</a>
          <a href="/register">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
