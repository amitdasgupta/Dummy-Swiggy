import React, { Component } from "react";
import logo from "../assets/images/swiggy.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const { handleSeeAll } = this.props;
    return (
      <nav className="nav" id="navbar">
        <img
          src={logo}
          className="nav-logo"
          alt="Logo"
          onClick={this.scrollToTop}
        />
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleSeeAll(false)}
              >
                Popular Brands
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleSeeAll(false)}
              >
                Offers Near You
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleSeeAll(false)}
              >
                Express Delivery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleSeeAll(false)}
              >
                Gourment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                onClick={handleSeeAll(false)}
                duration={500}
              >
                Only on swiggy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleSeeAll(true)}
              >
                See All
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
