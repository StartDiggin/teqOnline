import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Carousel from "./Carousel";
import MainBody from "./MainBody";

export class App extends React.Component {
  state = {
    order: {}
  };

  render() {
    return (
      <>
        <div className="main">
          <Header />

          <MainBody />

          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
