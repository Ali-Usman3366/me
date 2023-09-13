import React from "react";
import ScrollspyNav from "react-scrollspy-nav";
import "./Navbar.css";
import { NavLinks } from "../constents/DataFile";

const Navbar = () => {
  return (
    <>
      <ScrollspyNav
        scrollTargetIds={["home", "about", "portfolio", "services", "contact"]}
        activeNavClass="active"
        scrollDuration="500"
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid px-5 d-flex align-items-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav align-items-center mx-auto mb-2 mb-lg-0">
                {NavLinks?.map((nav,idx) => (
                  <li className="nav-item" key={idx}>
                    <a className="nav-link" href={nav.link}>
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </ScrollspyNav>
    </>
  );
};
export default Navbar;
