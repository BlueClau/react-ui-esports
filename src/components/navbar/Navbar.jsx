import { useState } from "react";
import "./navbar.scss";

function Navbar(){
    const[open,setOpen] = useState(false)
return(
    <nav>
        <div className="left">
            <a href="/" className="logo">
                <img src="/logo.png" alt="" />
                <span>eMap</span>
            </a>
            <a href="/">Home</a>
            <a href="/">Contact</a>
            <a href="/">About</a>
        </div>

        <div className="right">
            <a href="/" className="login">Sign in</a>
            <a href="/" className="register">Sign up</a>
            <div className="menuIcon">
                <img src="/menu.png" alt="" onClick = {()=>setOpen(!open)}/>
            </div>
            <div className={open ? "menu active " : "menu"}>
            <a href="/">Home</a>
            <a href="/">Contact</a>
            <a href="/">About</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>

            </div>
        </div>
    </nav>
)

}

export default Navbar;