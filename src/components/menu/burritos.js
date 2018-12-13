import React from "react";

const BurritosMenu = () => (
  <>
    <div className="burritos-left">
      <ul>
        <li>
          <h2>Build Your Own</h2>
          <span>$0</span>
          <h3>
            Your choice of meat and salsa. With rice, beans, crema, queso and
            pico de gallo. Tinga, picadillo, pulled pork $12 – Pork pastor,
            grilled steak, grilled chicken $13.50. Salsa roja, salsa verde,
            poblano salsa, chipotle salsa or queso sauce. Add guacamole $1.75
          </h3>
        </li>
        <li>
          <h2>Chori-Pollo Burrito</h2>

          <span>$13.50</span>
          <h3>
            Grilled chicken, chorizo, rice, beans, pico de gallo and crema, with
            queso sauce
          </h3>
        </li>
      </ul>
    </div>
    <div className="burritos-right">
      <ul>
        <li>
          <h2>Chipotle Seafood Burrito</h2>
          <span>$14.00</span>
          <h3>
            Creamy shrimp and crab meat mix, rice, chipotle sauce, mango pico
            and queso fresco
          </h3>
        </li>
      </ul>
    </div>
  </>
);

export default BurritosMenu;
