import React from "react";

const QuesadillasMenu = () => (
  <>
    <div className="quesadillas-left">
      <ul>
        <li>
          <h2>Southwest</h2>
          <span>$11.00</span>
          <h3>
            Grilled BBQ chicken, green peppers, onions and black beans, with
            crema and guacamole
          </h3>
        </li>
        <li>
          <h2>Mango Quesadilla</h2>
          <span>$12.00</span>
          <h3>
            Carne asada, caramelized onion, mango pico, avocado slices and
            chipotle crema
          </h3>
        </li>
        <li>
          <h2>Tequila’s Quesadilla</h2>
          <span>$11.00</span>
          <h3>
            Tinga, Picadillo, or Pork Carnitas, with crema, guacamole and salsa
            cruda
          </h3>
        </li>
      </ul>
    </div>
    <div className="quesadillas-right">
      <ul>
        <li>
          <h2>Pastor Quesadilla</h2>
          <span>$12.00</span>
          <h3>
            Marinated pork and roasted pineapple, caramelized onions, and salsa
            cruda
          </h3>
        </li>
        <li>
          <h2>Meatless (V)</h2>
          <span>$10.00</span>
          <h3>Black beans, creamy spinach, queso fresco and crema</h3>
        </li>
        <li>
          <h2>Hula Hawaiian</h2>
          <span>$11.00</span>
          <h3>
            Chorizo with Pineapple pico de gallo, avocado slices and caramelized
            onions, served with crema and queso fresco
          </h3>
        </li>
      </ul>
    </div>
  </>
);

export default QuesadillasMenu;
