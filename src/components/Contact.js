import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MapContainer from "./GoogleMap";

class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Header />

          <div className="contactPage">
            <div className="contactImg">
              <h1>Contact Us</h1>
            </div>
            <div className="info">
              <ul>
                <li>
                  <h1>Contact Information</h1>
                  <h3>Tequila’s Grill & Catina</h3>
                  <h4>6 Vinal Square </h4>
                  <h4>North Chelmsford, MA 01863</h4>
                  <h3>Telephone:</h3>
                  <h4>(978) 710-5512</h4>
                  <h3>Email:</h3>
                  <h4 className="email">luisarceo21@gmail.com</h4>
                  <br />
                  <h3 className="fb">
                    Follow us on <p className="email">Facebook</p>
                  </h3>
                </li>
              </ul>
            </div>
            <div className="map">
              <MapContainer />
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
