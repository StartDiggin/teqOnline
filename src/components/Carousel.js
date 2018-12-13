import React from "react";
import bar2 from "../css/images/bar2.PNG";
import drinks from "../css/images/drinks.jpg";
import lunch from "../css/images/lunch.jpg";
import ourMenu from "../css/images/ourMenu.jpg";
import outside from "../css/images/outside.PNG";
import bar from "../css/images/bar.jpg";

class Carousel extends React.Component {
  render() {
    return (
      <>
        <div>
          <img className="img1" src={bar2} alt="bar2" />
        </div>
        <div>
          <img src={drinks} alt="drinks" />
        </div>
        <div>
          <img src={lunch} alt="lunch" />
        </div>
        <div>
          <img src={ourMenu} alt="ourMenu" />
        </div>
        <div>
          <img src={outside} alt="outside" />
        </div>
        <div>
          <img src={bar} alt="bar" />
        </div>
      </>
    );
  }
}

export default Carousel;
