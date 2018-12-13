import React from "react";

const FajitasMenu = () => (
  <>
    <div className="fajitas-left">
      <ul>
        <li>
          <h2>Animal Style</h2>
          <span>$19.00</span>
          <h3>
            Bacon-wrapped cheesy shrimp on a hot skillet over sautéed vegetables
            drizzled with cilantro crema
          </h3>
        </li>
        <li>
          <h2>Shrimp</h2>
          <span>$17.00</span>
        </li>
        <li>
          <h2>Chicken</h2>
          <span>$15.50</span>
        </li>
      </ul>
    </div>
    <div className="fajitas-right">
      <ul>
        <li>
          <h2>Combination</h2>
          <span>$16.50 - $17</span>
          <h3>
            <small className="fajitasPrice">
              | of Two - $16.50 | of Three - $17 |
            </small>
          </h3>
        </li>
        <li>
          <h2>Steak</h2>
          <span>$16.50</span>
        </li>
      </ul>
    </div>
  </>
);

export default FajitasMenu;
