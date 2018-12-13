import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppetizersMenu from "./menu/appetizers";
import BurritosMenu from "./menu/burritos";
import EnchiladasMenu from "./menu/enchiladas";
import EntreesMenu from "./menu/entrees";
import FajitasMenu from "./menu/fajitas";
import PostresMenu from "./menu/postres";
import QuesadillasMenu from "./menu/quesadillas";
import SidesMenu from "./menu/sides";
import SopasMenu from "./menu/sopas";
import TacosMenu from "./menu/tacos";
import TortasMenu from "./menu/tortas";

class OurMenu extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Header />

          <div className="orderOnline">
            <div className="onlineImg">
              <h1>Our Menu</h1>
            </div>
            <div className="headings">
              <h1>Appetizers</h1>
            </div>
            <AppetizersMenu />
            <div className="headings">
              <h1>Burritos</h1>
            </div>
            <BurritosMenu />
            <div className="headings">
              <h1>Enchiladas</h1>
            </div>
            <EnchiladasMenu />
            <div className="headings">
              <h1>Entrees</h1>
            </div>
            <EntreesMenu />
            <div className="headings">
              <h1>Fajitas (GF)</h1>
            </div>
            <FajitasMenu />
            <div className="headings">
              <h1>Postres</h1>
              <h4>Desserts</h4>
            </div>
            <PostresMenu />
            <div className="headings">
              <h1>Quesadillas</h1>
              <h4>TWO FLOUR TORTILLAS WITH MIXED CHEESES.</h4>
            </div>
            <QuesadillasMenu />
            <div className="headings">
              <h1>Sides</h1>
            </div>
            <SidesMenu />
            <div className="headings">
              <h1>Sopas & Ensaladas</h1>
              <h4>
                HOUSE DRESSINGS: POBLANO RANCH DRESSING & CILANTRO- LIME
                VINAIGRETTE. DRESSINGS: RANCH, BLUE CHEESE, ITALIAN, CAESAR,
                BALSAMIC VINAIGRETTE
              </h4>
            </div>
            <SopasMenu />
            <div className="headings">
              <h1>Steet Style Tacos</h1>
              <h4>SERVED WITH RICE & BEANS</h4>
            </div>
            <TacosMenu />
            <div className="headings">
              <h1>Tortas</h1>
              <h4>Mexican Sandwiches</h4>
            </div>
            <TortasMenu />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default OurMenu;
