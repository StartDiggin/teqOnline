import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class LunchMenu extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Header />

          <div className="lunchMenu">
            <div className="lunchImg">
              <h1>Lunch Menu</h1>
            </div>
            <div className="lunchHours">
              <h4>Monday-Friday 11am-3pm</h4>
              <h1>Combos</h1>
              <h4>Tortilla soup with a choice of salad $10</h4>
            </div>
            <div className="lunch-left">
              <h2>Half Torta with Soup or Salad</h2>
              <span>$11.50</span>
              <h4>Choice of tortilla soup or salad</h4>
              <h4>Choice of Tortas:</h4>
              <ul>
                <li>
                  <strong>Carne Asada Torta: </strong>Grilled Skirt steak on a
                  soft roll, refried beans, sliced avocado, queso, cilantro,
                  onions and crema, served with tomatillo salsa
                </li>
                <li>
                  <strong>Mexican Torta Cubana: </strong>Hand breaded chicken
                  breast, ham, grilled sausages, melted cheese, crema, avocados,
                  lettuce and tomatoes
                </li>
              </ul>
            </div>
            <div className="lunch-right">
              <h2>Tortilla Soup with a Choice of Salad</h2>
              <span>$10.00</span>
              <h4>Salad Choices:</h4>
              <ul>
                <li>Caesar- Traditional Salad from Tijuana, Mexico.</li>
                <li>
                  Ranchera- Romaine lettuce, black beans, queso fresco,
                  tomatoes, tortilla strips and poblano ranch dressing
                </li>
                <li>
                  Southwest chopped salad – A mix of garbanzo, cucumber, cherry
                  tomatoes, avocado, queso fresco, and red onions. Served on a
                  bed of mixed greens with our homemade cilantro-lime
                  vinaigrette
                </li>
              </ul>
            </div>
            <div className="specials">
              <h1>Lunch Specials</h1>
            </div>
            <div className="specials-choices-left">
              <ul>
                <li>
                  <h2>Huevos Rancheros</h2>
                  <span>$8.00</span>
                  <h3>
                    3 sunny side up eggs, topped with cheese and salsa, served
                    with rice, beans and tortillas
                  </h3>
                </li>
                <li>
                  <h2>Huevos con Chorizo</h2>
                  <span>$8.50</span>
                  <h3>
                    Ground Mexican pork sausage mixed with eggs and potatoes,
                    served with rice, beans and tortillas
                  </h3>
                </li>
                <li>
                  <h2>Street Wrap Burrito</h2>
                  <span>$9.00</span>
                  <h3>
                    A street style burrito with everything wrapped inside a
                    tortilla. Refried and black beans, rice, guacamole, jack
                    cheese, pico de gallo, and sour cream. Choice of tinga,
                    chorizo or picadillo
                  </h3>
                </li>
                <li>
                  <h2>Enchiladas Suizas</h2>
                  <span>$9.00</span>
                  <h3>
                    Tinga, with tomatillo salsa and melted cheese, topped with
                    crema and queso fresco, served with rice and beans
                  </h3>
                </li>
              </ul>
            </div>
            <div className="specials-choices-right">
              <ul>
                <li>
                  <h2>Chimichanga</h2>
                  <span>$10.00</span>
                  <h3>
                    Choice of tinga or picadillo, wrapped in a flour tortilla
                    and fried until golden brown, topped with chile con queso
                    sauce, served with rice, beans and crema
                  </h3>
                </li>
                <li>
                  <h2>Chilaquiles and Eggs</h2>
                  <span>$9.50</span>
                  <h3>
                    Corn tortillas cut in quarters, lightly fried, covered in a
                    red guajillo tomato salsa, topped with onions, queso fresco,
                    crema and a hint of oregano. Served with refried beans,
                    avocado slices and 2 eggs cooked any style
                  </h3>
                </li>
                <li>
                  <h2>Tequila’s Quesadilla</h2>
                  <span>$9.00</span>
                  <h3>
                    Tinga, Picadillo, or Pork Carnitas, with crema and salsa
                    cruda
                  </h3>
                </li>
              </ul>
            </div>
            <div className="street-tacos">
              <h1>Street Style Tacos</h1>
            </div>
            <div className="tacos-left">
              <ul>
                <li>
                  <h2>Americano Style</h2>
                  <span>$8.50</span>
                  <h3>
                    3 tacos with picadillo on crispy tortilla shells, lettuce,
                    tomatoes, cheddar cheese and crema, served with rice and
                    beans
                  </h3>
                </li>
                <li>
                  <h2>Chicken Ranchero</h2>
                  <span>$9.50</span>
                  <h3>
                    2 tacos with melted jack cheese, caramelized onions, pico de
                    gallo, queso fresco, and guacamole, served with rice and
                    beans
                  </h3>
                </li>
              </ul>
            </div>
            <div className="tacos-right">
              <ul>
                <li>
                  <h2>Chori Papa</h2>
                  <span>$9.00</span>
                  <h3>
                    2 tacos with chorizo and potatoes, melted cheese, queso
                    fresco and crema, on a crispy flour, served with rice and
                    beans
                  </h3>
                </li>
              </ul>
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

export default LunchMenu;
