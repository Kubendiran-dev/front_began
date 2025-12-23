import React from "react"
import "./Navbar.css";

import { Link } from "react-router-dom"



const Navbar = () => {

const links = [{link:"Home",path:"/"},{link:"Crew",path:"/crew"},{link:"Trailer",path:"/trailer"}]

return (
    <nav className="navbar">
      <div className="nav-container">

        {links.map((e, i) => (
          <Link key={i} to={e.path} className="nav-link">
            {e.link}
          </Link>
        ))}

      </div>
    </nav>
  );
};

export default Navbar