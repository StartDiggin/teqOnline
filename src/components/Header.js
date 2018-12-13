import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <>
        <header className="top">
          <div className="logo">
            {/* <h1>TEQUILA'S</h1>
            <h5>Grill & Cantina</h5> */}
          </div>
          <div className="contact">
            <h2>
              <i className="reservations">
                RESERVATIONS: <strong className="phone">(978) 710-5512</strong>
              </i>
            </h2>
            <div>
              <a className="navRoutes" href="/">
                Home
              </a>
              <a className="navRoutes" href="/orderOnline">
                Order Online
              </a>
              <div className="drpMenu">
                <button className="dropbtn">
                  <p>
                    Menu
                    <i className="down" />
                  </p>
                </button>
                <div className="drpMenuContent">
                  <a href="/ourMenu">Our Menu</a>
                  <a href="/lunchMenu">Lunch Menu</a>
                  <a href="/drinkMenu">Drink Menu</a>
                </div>
              </div>
              <a className="navRoutes" href="/about">
                About
              </a>
              <a className="navRoutes" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
