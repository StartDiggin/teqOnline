import React from "react";

const AppetizersMenu = () => (
  <>
    <div className="appetizers-left">
      <ul>
        <li>
          <h2>Grande Sampler</h2>
          <span>$13.00</span>
          <h3>Nachos, empanadas, wings, quesadillas</h3>
        </li>
        <li>
          <h2>Wings Borrachas</h2>

          <span>$9.00</span>
          <h3>With tequila lime marinade</h3>
        </li>
        <li>
          <h2>Empanadas Tradicionales (4)</h2>

          <span>$11.00</span>
          <h3>
            Fried pastries stuffed with picadillo and served with sour cream and
            salsa cruda
          </h3>
        </li>
        <li>
          <h2>Loaded Nachos (V) (GF)</h2>

          <span>$11.00</span>
          <h3>
            Melted jack cheese, queso sauce, black and refried beans, lettuce,
            pico de gallo, cilantro, chipotle crema, guacamole and queso fresco,
            Choice of tinga, picadillo, or pulled pork, Jalapeños upon request
          </h3>
        </li>
        <li>
          <h2>Sopes Jalisco (4)</h2>
          <span>$10.00</span>
          <h3>
            Thick homemade tortillas, topped with refried beans, your choice of
            tinga, chorizo, or picadillo, topped with lettuce, sour cream,
            salsa, and queso fresco.
          </h3>
        </li>
        <li>
          <h2> Corn 'De La Calle' (V) (GF)</h2>
          <span>$6.50</span>
          <h3>
            Roasted corn on the cob Mexican style, covered with a creamy mayo
            mix, butter, topped with queso fresco and a hint of chili powder.
          </h3>
        </li>
        <li>
          <h2>Tequila's Tableside Guacamole (V) (GF)</h2>
          <span>$9.00</span>
          <h3>
            Choose your Styles:
            <li className="guacOptions">El Original: Pico de gallo</li>
            <li className="guacOptions">
              Toreado: sautéed chile serrano, garlic, oregano, pico de gallo
            </li>
            <li className="guacOptions">De Pina: Pineapple pico de gallo</li>
            <li className="guacOptions">
              Cochinita: Bacon, pico de gallo, garnished with cotija cheese
            </li>
          </h3>
        </li>
      </ul>
    </div>
    <div className="appetizers-right">
      <ul>
        <li>
          <h2>Tostadas de Tinga (3) (GF)</h2>
          <span>$10.00</span>
          <h3>
            Tostadas with refried beans and tinga, topped with lettuce, tomato,
            crema and queso fresco
          </h3>
        </li>
        <li>
          <h2>Ancho Chile Wings (8)</h2>

          <span>$9.00</span>
          <h3>
            Breaded chicken wings sautéed in our homemade sweet chili ancho
            salsa
          </h3>
        </li>
        <li>
          <h2>Southwest Empanadas (4) (V)</h2>

          <span>$11.00</span>
          <h3>
            A fried pastry, with creamy poblano and corn filling, served with
            salsa cruda
          </h3>
        </li>
        <li>
          <h2>Taquitos (4) (GF)</h2>

          <span>$9.00</span>
          <h3>
            Fried tacos filled with chorizo and garlic mashed potatoes, topped
            with avocados, queso fresco and sour cream, served with green
            tomatillo sauce on the side
          </h3>
        </li>
        <li>
          <h2>Citrus Fresco Ceviche (V) (GF)</h2>
          <span>$12.00</span>
          <h3>
            A traditional dish from Mexico made from fresh raw shrimp cured in
            lime juice, mixed with tomatoes, cilantro, onions and our secret
            seasoning, served with avocado and tostadas. Cielo Rojo Style: With
            tomato juice and seasoning
          </h3>
        </li>
        <li>
          <h2>Tequilas Queso Dip (V) (GF)</h2>
          <span>$5.00</span>
          <h3>Add: Chorizo, Picadillo or Spinach $1.50</h3>
        </li>
      </ul>
    </div>
  </>
);

export default AppetizersMenu;
