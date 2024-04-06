import React from "react"
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <>
          <nav
      className=
      "navbar navbar-expand-lg navbar-light bg-light"
      >
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">
          Bmi Calculator
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/About">
                About
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
        </>
        

    )
}
export default Navbar;