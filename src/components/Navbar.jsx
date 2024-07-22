import React, { useState } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';
import name from "../images/logo.png";
import logo from '../images/Navbar/logo.svg';
import dropdown from '../images/dropdown.svg'

function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState("nav__menu bl");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    setActive(active === "nav__menu bl" ? "nav__menu bl nav__active" : "nav__menu bl");
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  const dropdownToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = event.currentTarget.nextElementSibling;
    dropdown.classList.toggle('uk-open');
  };

  const history = useHistory();

  const handleClick = () => {
    history.push('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="m">
      <nav className="nav sticky1">
        <Link to="/" onClick={handleClick}>
          <img style={{ marginRight: '1rem' }} src={logo} alt=""  width="43px" height="44px"/>
          <img className="logonav" src={name} alt="" width="144px" height="24px"/>
        </Link>
        <ul className={active}>
          <div className="menu1">
            <li className={`nav__item menu1 ${location.pathname === "/" ? "active" : ""}`}>
              <Link to="/" className="nav__link nn" onClick={() => window.scrollTo(0, 0)}>
                Home
              </Link>
            </li>
          </div>

          <div className="menu1">
            <div className="dropdown " data-uk-dropdown="{pos:'bottom-center'}">
              <Link to="/mobileapp" onClick={dropdownToggle} className={`nav__link nn ${location.pathname.includes("/services/mobileapp") || location.pathname.includes("/services/webapp") || location.pathname.includes("/services/watchapp") || location.pathname.includes("/services/machinelearn") || location.pathname.includes("/services/uiux") || location.pathname.includes("/services/digitalmarketing") ? "active" : ""}`}>
                Services <img src={dropdown} alt="" />
              </Link>
              <div className="dropdown-content">
                <div className="d-flex">
                  <div className="mx-10">
                    <Link to="/services/mobileapp" className='nav__link nn' onClick={() => window.scrollTo(0, 0)}>
                      Mobile App Development
                    </Link>
                    <Link to="/services/webapp" className='nav__link nn' onClick={() => window.scrollTo(0, 0)}>
                      Web App Development
                    </Link>
                    <Link to="/services/watchapp" className='nav__link nn' onClick={() => window.scrollTo(0, 0)}>
                      Watch App Development
                    </Link>
                    <Link to="/services/machinelearn" className='nav__link nn'onClick={() => window.scrollTo(0, 0)}>
                      ML & AI
                    </Link>
                    <Link to="/services/uiux" className='nav__link nn'onClick={() => window.scrollTo(0, 0)}>
                      UI/UX Deisgn
                    </Link>
                    <Link to="/services/digitalmarketing" className='nav__link nn' onClick={() => window.scrollTo(0, 0)}>
                      Digital Marketing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu1">
            <div className="dropdown " data-uk-dropdown="{pos:'bottom-center'}">
              <Link to="/mobileportfolio" onClick={dropdownToggle} className={`nav__link nn ${location.pathname.includes("/portfolio/mobileportfolio") || location.pathname.includes("/portfolio/webportfolio") || location.pathname.includes("/portfolio/watchportfolio") || location.pathname.includes("/portfolio/aiportfolio") || location.pathname.includes("/portfolio/uiportfolio") ? "active" : ""}`}>
                Portfolio <img src={dropdown} alt="" />
              </Link>
              <div className="dropdown-content">
                <div className="d-flex">
                  <div className="mx-10">
                    <Link to="/portfolio/mobileportfolio" className="nav__link nn" onClick={() => window.scrollTo(0, 0)}>
                      Mobile App
                    </Link>
                    <Link to="/portfolio/webportfolio" className="nav__link nn" onClick={() => window.scrollTo(0, 0)}>
                      Web App
                    </Link>
                    <Link to="/portfolio/watchportfolio" className="nav__link nn" onClick={() => window.scrollTo(0, 0)}>
                      Watch App
                    </Link>
                    <Link to="/portfolio/aiportfolio" className="nav__link nn" onClick={() => window.scrollTo(0, 0)}>
                      ML & AI
                    </Link>
                    <Link to="/portfolio/uiportfolio" className="nav__link nn" onClick={() => window.scrollTo(0, 0)}>
                      UI/UX Deisgn
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu1">
            <li className={`nav__item menu1 ${location.pathname === "/blogs" || location.pathname.includes("/blogs/blogposts") ? "active" : ""}`}>
              <Link to="/blogs" className="nav__link nn" onClick={() => window.scrollTo(0, 0)}>
                Blogs
              </Link>
            </li>
          </div>

          <div className="menu1">
            <li className={`nav__item menu1 ${location.pathname === "/aboutus" ? "active" : ""}`}>
              <Link to="/aboutus" className="nav__link nn " onClick={() => window.scrollTo(0, 0)}>
                About Us
              </Link>
            </li>
          </div>

          <div className="menu1">
            <li className={`nav__item menu1 ${location.pathname === "/contact" ? "active" : ""}`}>
              <Link to="/contact" className="nav__link nn " onClick={() => window.scrollTo(0, 0)}>
                Contact Us
              </Link>
            </li>
          </div>

          <div className="consult">
            <li className="nav__item ">
              <Link to="/contact" className="nav__link nn " onClick={() => window.scrollTo(0, 0)}>
                <button className="consult-btn">Free Consultation</button>
              </Link>
            </li>
          </div>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
