import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
      
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     {/* <span class="navbar-brand mb-1 h1">Jeaney Bean</span> */}
      <Link className="navbar-brand mb-1 h1" to="/">
        Jeaney Bean
      </Link>

   <div>
       {/* <ul class="nav navbar-nav navbar-right"> */}
        <ul className="navbar-nav">

        {/* <li class="nav-item">
      <a class="nav-link" href="index.html">About</a>
    </li> */}
          <li className="nav-item">
           <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          {/* <li class="nav-item">
      <a class="nav-link" href="portfolio.html">Portfolio</a>
    </li> */}
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          {/* <li class="nav-item">
      <a class="nav-link" href="contact.html">Contact</a>
    </li> */}
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
    </ul>
</div>
</nav>
  );
}

export default Navbar;


