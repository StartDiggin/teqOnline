import React from "react";

const TortasMenu = () => (
  <>
    <div className="tortas-left">
      <ul>
        <li>
          <h2>Mexican Torta Cubana</h2>
          <span>$11.50</span>
          <h3>
            Hand-breaded chicken breast, ham, grilled sausages, melted cheese,
            crema, avocados, lettuce and tomato
          </h3>
        </li>
        <li>
          <h2>Carne Asada Steak Torta</h2>
          <span>$10.00</span>
          <h3>
            Grilled Skirt steak on a soft roll, refried beans, sliced avocado,
            queso, cilantro, onions and crema. Served with tomatillo salsa and
            French fries
          </h3>
        </li>
      </ul>
    </div>
    <div className="tortas-right">
      <ul>
        <li>
          <h2>Green Chile Burger</h2>
          <span>$13.00</span>
          <h3>
            Our 1/2lb homemade patty, served with a roasted poblano peppers,
            jack cheese, poblano ranch, and an over easy egg on top, served with
            French fries
          </h3>
        </li>
        <li>
          <h2>Guadalajara Torta Ahogada</h2>
          <span>$11.00</span>
          <h3>
            Slow-cooked pork carnitas, refried beans, pickled red onions, soaked
            in a tomato broth, served with spicy chili salsa on the side
          </h3>
        </li>
      </ul>
    </div>
  </>
);

export default TortasMenu;
