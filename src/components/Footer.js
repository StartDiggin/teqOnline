import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footerContact">
          <h2>Contact Us</h2>
          <h3>6 Vinal Square, North Chelmsford, MA</h3>
          <h3>(978) 710 - 5512</h3>
          <h3>Sun - Thurs: 11:00 AM - 10:00 PM</h3>
          <h3>Fri - Sat: 11:00 AM - 11:00 PM</h3>
        </div>
        <div className="follow">
          <h2>Follow Us On Facebook</h2>
          {/* eslint-disable-next-line */}
          <a href="https://www.facebook.com/" className="fa fa-facebook" />
        </div>
        <div className="copy-right">
          <h4>© 2018 Tequila's Grill & Cantina. All rights reserved</h4>
        </div>
      </>
    );
  }
}

export default Footer;
